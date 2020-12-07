GENERATED_SERVER_DIR = "../server/pb"
GENERATED_CLIENT_DIR = "../client/pb"
PROTO_FILE = "./dashboard.proto"

.PHONY: proto

proto:
	mkdir -p ${GENERATED_SERVER_DIR}
	mkdir -p ${GENERATED_CLIENT_DIR}
	protoc ${PROTO_FILE} --go_out=plugins=grpc:${GENERATED_SERVER_DIR}
	protoc ${PROTO_FILE} --js_out=import_style=commonjs,binary:${GENERATED_CLIENT_DIR} --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${GENERATED_CLIENT_DIR}
