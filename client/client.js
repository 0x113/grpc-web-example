import { DashboardServiceClient } from './pb/dashboard_grpc_web_pb';
import { DashboardRequest } from './pb/dashboard_pb';

var app = new Vue({
  el: '#dashboard',
  data: {
    message: 'Hello Vue!',
    failed_jobs: 0,
    running_jobs: 0,
    completed_jobs: 0,
    partial_jobs: 0,
    skipped_jobs: 0,
    stream: null,
    dashboard_chart: null,
  },
  mounted() {
    this.initStream()
    this.setChart()
    this.getDashboard()
  },
  methods: {

    initStream: function() {
      const client = new DashboardServiceClient("http://localhost:8080");

      var dashboardRequest = new DashboardRequest()
      var stream = client.dashboardStats(dashboardRequest, {})
      this.stream = stream
    },

    getDashboard: function() {
      this.message = "test"
      this.stream.on("data", (res) => {
        this.completed_jobs = res.getCompleted()
        this.running_jobs = res.getRunning()
        this.failed_jobs = res.getFailed()
        this.skipped_jobs = res.getSkipped()
        this.partial_jobs = res.getPartial()

        var data = [this.completed_jobs, this.running_jobs, this.failed_jobs, this.partial_jobs]
        this.updateChart(data)
      })
    },

    updateChart: function(data) {
      this.dashboard_chart.data.datasets[0].data = data
      this.dashboard_chart.update()
    },

    setChart: function() {
      var ctx = document.getElementById("dashboard-chart").getContext('2d');
      this.dashboard_chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Successful", "Running", "Failed", "Partial"],
          datasets: [{
            data: [1,0,0,0,0],
            backgroundColor: [
              '#04A777',
              '#736F72',
              '#E15634',
              '#BF98A0',
            ],
            borderColor: [
              '#04A777',
              '#736F72',
              '#E15634',
              '#AA968A',
              '#BF98A0',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                display: false,
              },
              gridLines: {
                drawBorder: false,
                display: false,
              }
            }],
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false,
              },
              ticks: {
                display: false,
              }
            }]
          },
          legend: {
            display: false
          }
        }
      });
    },

  }
})
