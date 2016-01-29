#!/bin/bash
source /data/env
docker rm -f im
docker build -t im .
docker run -d --name im \
  -p 8080:5010 \
	-e RABBIT_CONN_POOL_COUNT=10 \
	-e MONGO_URL=mongodb://123.59.81.219:27017/im \
	-e SERVER_TOKEN=woingi929k48fj2372he8dn289kmoi3 \
	-e RABBIT_URL="amqp://rabbit.vitamin.bengjiujie.com" \
	-e REDIS_URL="redis://123.59.81.219:6379" \
	im