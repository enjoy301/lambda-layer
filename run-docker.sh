#!/bin/bash

# docker 실행중인지 확인
RESULT=$(docker info)
if [[ "$RESULT" == *"Is the docker daemon running?"* ]]; then
    open /Applications/Docker.app
fi

# docker 실행 대기
i=0
while [ $i -le 30 ]
do
    i=$(($i+1))
    RESULT=$(docker info)
    if [[ "$RESULT" == *"no such file or directory"* ]] || [[ "$RESULT" == *"Is the docker daemon running?"* ]]; then
        sleep 1
    else
        break
    fi
done

if [ $i -eq 31 ]; then
    echo "ERROR: not found amongst zypper list results"
fi