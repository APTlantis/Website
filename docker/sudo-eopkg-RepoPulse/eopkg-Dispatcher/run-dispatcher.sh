#!/bin/bash

docker run --rm \
  -v /mnt/aptlantis/mirror:/mnt/aptlantis/mirror \
  apt-dispatcher:latest
