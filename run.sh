#!/bin/bash
source /data/env
docker rm -f im
docker build -t im .
docker run -d --name im \
  -p 8080:5010 \
	-e RABBIT_CONN_POOL_COUNT=10 \
	-e MONGO_URL="$MONGO_URL" \
	-e RABBIT_URL="$RABBIT_URL" \
	-e REDIS_URL="$REDIS_URL" \
	im