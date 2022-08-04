#!/usr/bin/env bash

set -ex

sync

uid=$(id "$USER" -u)
gid=$(id "$USER" -g)

mkdir -p .workdir distribution
sudo chown -R "$uid":"$gid" .workdir distribution

npm run generate:workdir -- -p "$1"

sync

docker run --rm \
  -v "$(pwd)/.workdir:/workdir" \
  -v "$(pwd)/distribution:/distribution" \
  thibaultmorin/plantuml-generator:1 \
  plantuml-generator library generate library.yaml \
  --urn="$1" --clean-urn="$1" -O=/distribution

sync

sudo chown -R "$uid":"$gid" .workdir distribution
