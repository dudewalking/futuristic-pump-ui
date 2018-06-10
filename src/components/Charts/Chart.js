import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import isEqual from "lodash/isEqual";

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

export default class Chart extends Component {
  componentDidMount() {
    this.chart = new Highcharts[this.props.type || "Chart"](
      this.chartEl,
      this.props.options
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.newVal, this.props.newVal)) {
      let point = this.chart.series[0].points[0];
      nextProps.newVal >= 0 ? point.update(nextProps.newVal) : point.update(0);
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div
        style={{ display: "inline-block" }}
        ref={el => (this.chartEl = el)}
      />
    );
  }
}
