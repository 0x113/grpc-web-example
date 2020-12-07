FROM golang:1.15.2 as builder

ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

WORKDIR /build

COPY . .
RUN go mod download

RUN go build -o server .

FROM scratch
COPY --from=builder /build/server .

EXPOSE 9090
ENTRYPOINT ["./server"]
