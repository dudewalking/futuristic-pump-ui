import React from "react";
import "echarts-liquidfill";
import ReactEcharts from "echarts-for-react";

export const WaterAnimation = props => {
  const { pumpHeight } = props;
  return (
    <div
      className="water-animation"
      style={{
        position: "absolute",
        width: 187,
        height: 220
      }}
    >
      <ReactEcharts
        option={{
          series: [
            {
              type: "liquidFill",
              data: [pumpHeight / 10],
              shape: "rect",
              outline: {
                show: false
              },
              amplitude: "3%",
              waveLength: "40%",

              backgroundStyle: {
                color: "white"
              },

              label: {
                show: true,
                color: "#294D99",
                insideColor: "#fff",
                fontSize: 30,
                fontWeight: "bold",

                align: "center",
                baseline: "middle",
                position: "inside"
              }
            }
          ]
        }}
      />
    </div>
  );
};
