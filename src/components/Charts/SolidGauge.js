import React, { Component } from "react";
import Chart from "./Chart";
import Highcharts from "highcharts";

export default class SolidGauge extends Component {
  render() {
    const gaugeOptions = {
      chart: {
        type: "solidgauge",
        height: 250,
        width: 300,
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

      // the value axis
      yAxis: {
        min: this.props.interval.min,
        max: this.props.interval.max,
        title: {
          text: this.props.text
        }
      },

      credits: {
        enabled: false
      },

      series: [
        {
          name: this.props.text,
          data: [0],
          dataLabels: {
            format:
              '<div style="text-align:center"><span style="font-size:25px;color:' +
              ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black") +
              '">{y}</span><br/>' +
              '<span style="font-size:12px;color:silver">' +
              this.props.measure +
              "</span></div>"
          },
          tooltip: {
            valueSuffix: " " + this.props.measure
          }
        }
      ],

      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      }
    };

    return <Chart options={gaugeOptions} newVal={this.props.data} />;
  }
}
