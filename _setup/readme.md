### Setup


- Install node runtime, npm

- Install docker

- Install BloomRPC (optional)

- Setup envoy by run
```
docker-compose up -d --build
```

- Install protocol buffer compiler (link)[https://grpc.io/docs/protoc-installation/]
```
brew install protobuf
```

- Install Code generator plugin (link)[https://github.com/grpc/grpc-web#code-generator-plugin]
(must be grant permission run on MacOS)

- Compile proto file
```
cd .. && protoc -I=. ../service.proto \
  --js_out=import_style=commonjs:./client/proto \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client/proto
```