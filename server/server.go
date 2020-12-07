package main

import (
	"crypto/rand"
	"math/big"
	"net"
	"os"
	"time"

	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"

	pb "github.com/0x113/grpc-web-example/pb"
)

type server struct {
	pb.UnimplementedDashboardServiceServer
}

func randomNum() int64 {
	num, err := rand.Int(rand.Reader, big.NewInt(int64(10)))
	if err != nil {
		return 0
	}
	return num.Int64()
}

func (s *server) DashboardStats(req *pb.DashboardRequest, stream pb.DashboardService_DashboardStatsServer) error {
	log.Infoln("Serving dashboard stats...")
	var err error
	for {
		res := &pb.DashboardResponse{
			Failed:    randomNum(),
			Completed: randomNum(),
			Running:   randomNum(),
			Skipped:   randomNum(),
			Partial:   randomNum(),
		}
		err := stream.Send(res)
		if err != nil {
			log.Errorf("Failed to send dashboard stats: %v", err)
			break
		}
		time.Sleep(1 * time.Second)
	}

	return err
}

func main() {
	lis, err := net.Listen("tcp", ":9090")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
		os.Exit(1)
	}

	opts := []grpc.ServerOption{}
	s := grpc.NewServer(opts...)
	pb.RegisterDashboardServiceServer(s, &server{})

	log.Infoln("Serving gRPC over port 9090...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to server gRPC over port 9090: %v", err)
		os.Exit(1)
	}
}
