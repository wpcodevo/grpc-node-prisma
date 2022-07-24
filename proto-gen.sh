#!/bin/bash

rm -rf pb/
yarn proto-loader-gen-types --longs=String --enums=String --defaults --keepCase --oneofs --grpcLib=@grpc/grpc-js --outDir=pb/ proto/*.proto