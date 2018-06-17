import React, { Component } from "react";
import Chart from "./Chart";
import Highcharts from "highcharts";

export default class Gauge extends Component {
  render() {
    const gaugeOptions = {
      chart: {
        type: "gauge",
        height: 250,
        width: 300,
        backgroundColor: "rgba(255, 255, 255, 0.0)"
      },

      title: null,

      pane: {
        center: ["50%", "85%"],
        size: "100%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc"
        }
      },

      tooltip: {
        enabled: false
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },

      yAxis: {
        min: this.props.interval.min,
        max: this.props.interval.max,
        title: {
          text: this.props.text + ", " + this.props.measure,
          y: 100
        }
      },

      credits: {
        enabled: false
      },

      series: [
        {
          name: "Data",
          data: [0],
          dataLabels: {
            borderWidth: 0,
            padding: 15,
            verticalAlign: "top",
            format:
              '<div style="text-align:center"><divstyle="font-size:25px;color:' +
              ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black") +
              '">{y}</div>'
          },
          tooltip: {
            valueSuffix: " " + this.props.measure
          }
        }
      ]
    };

    return <Chart options={gaugeOptions} newVal={this.props.data} />;
  }
}
