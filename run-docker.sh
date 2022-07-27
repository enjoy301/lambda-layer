#!/bin/bash

# docker 실행중인지 확인
RESULT=$(docker info)

echo "$RESULT"

if [[ "$RESULT" == *"Is the docker daemon running?"* ]]; then
    open /Applications/Docker.app
fi
