import React, { Component } from "react";
import "./Pump.css";
import { WaterAnimation } from "./WaterAnimation";

export class Pump extends Component {
  render() {
    const controllerColors = this.props.data.map(controller => {
      let color = "none";
      if (controller.switch) {
        color =
          controller.state === "safe"
            ? "green"
            : controller.state === "unsafe" ? "red" : "none";
      } else if (!controller.switch && controller.state === "unsafe") {
        color = "red";
      }
      return { id: controller.id, color: color };
    });

    const colorsObj = {};
    controllerColors.forEach(data => (colorsObj[data.id] = data.color));

    return (
      <div className="pump">
        <WaterAnimation pumpHeight={this.props.pumpHeight} />
        <svg
          version={1.2}
          width={300}
          height={300}
          viewBox="0 0 21006 21184"
          preserveAspectRatio="xMidYMid"
          fillRule="evenodd"
          strokeWidth={28.222}
          strokeLinejoin="round"
          {...this.props}
        >
          <defs className="ClipPathGroup">
            <clipPath id="a">
              <path d="M0 0h21006v21184H0z" />
            </clipPath>
          </defs>
          <g className="SlideGroup">
            <g className="Slide" clipPath="url(#a)">
              <g className="Page">
                <g className="Group">
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="none"
                      d="M11666 9379h6734v7750h-6734z"
                    />
                    <path
                      fill="none"
                      d="M15033 17127h-3366V9380h6731v7747h-3365z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M15033 17127h-3366V9380h6731v7747h-3365z"
                    />
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="none"
                      d="M5063 14841h6861v765H5063z"
                    />
                    <path
                      fill="gray"
                      d="M8493 15604H5064v-762h6858v762H8493z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M8493 15604H5064v-762h6858v762H8493z"
                    />
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="none"
                      d="M3284 12046h3433v1782H3284z"
                    />
                    <path
                      fill="#99F"
                      d="M4960 13826l1755-1779H3285l1675 1779zm-1675 0zm3430-1779z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M4960 13826l1755-1779H3285l1675 1779zM3285 13826zM6715 12047z"
                    />
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="none"
                      d="M3157 13317h3687v3560H3157z"
                    />
                    <path
                      fill="#333"
                      d="M4999 13318c1044 0 1841 770 1841 1778s-797 1778-1841 1778-1841-770-1841-1778 797-1778 1841-1778zm-1841 0zm3684 3557z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M4999 13318c1044 0 1841 770 1841 1778s-797 1778-1841 1778-1841-770-1841-1778 797-1778 1841-1778zM3158 13318zM6842 16875z"
                    />
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="#FFF"
                      d="M18143 14967h1146v892h-1146z"
                    />
                    <path
                      fill={colorsObj[3] ? colorsObj[3] : "none"}
                      d="M18716 15857h-572v-889h1143v889h-571z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M18716 15857h-572v-889h1143v889h-571z"
                    />
                    <text className="TextShape">
                      <tspan
                        className="TextParagraph"
                        fontFamily="Liberation Sans, sans-serif"
                        fontSize={635}
                        fontWeight={400}
                      >
                        <tspan className="TextPosition" x={18540} y={15633}>
                          <tspan>3</tspan>
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="#FFF"
                      d="M8365 14205h1019v1908H8365z"
                    />
                    <path
                      fill={colorsObj[2] ? colorsObj[2] : "none"}
                      d="M8874 16111h-508v-1905h1016v1905h-508z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M8874 16111h-508v-1905h1016v1905h-508z"
                    />
                    <text className="TextShape">
                      <tspan
                        className="TextParagraph"
                        fontFamily="Liberation Sans, sans-serif"
                        fontSize={635}
                        fontWeight={400}
                      >
                        <tspan className="TextPosition" x={8699} y={15379}>
                          <tspan>2</tspan>
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="#FFF"
                      d="M4301 14586h1273v1146H4301z"
                    />
                    <path
                      fill={colorsObj[1] ? colorsObj[1] : "none"}
                      d="M4937 15730h-635v-1143h1270v1143h-635z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M4937 15730h-635v-1143h1270v1143h-635z"
                    />
                    <text className="TextShape">
                      <tspan
                        className="TextParagraph"
                        fontFamily="Liberation Sans, sans-serif"
                        fontSize={635}
                        fontWeight={400}
                      >
                        <tspan className="TextPosition" x={4762} y={15379}>
                          <tspan>1</tspan>
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="#FFF"
                      d="M18143 10776h1146v892h-1146z"
                    />
                    <path
                      fill={colorsObj[4] ? colorsObj[4] : "none"}
                      d="M18716 11666h-572v-889h1143v889h-571z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M18716 11666h-572v-889h1143v889h-571z"
                    />
                    <text className="TextShape">
                      <tspan
                        className="TextParagraph"
                        fontFamily="Liberation Sans, sans-serif"
                        fontSize={635}
                        fontWeight={400}
                      >
                        <tspan className="TextPosition" x={18540} y={11442}>
                          <tspan>4</tspan>
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="none"
                      d="M11666 3284h6735v6100h-6735z"
                    />
                    <path
                      fill="#DDD"
                      d="M15033 3285l3366 6097h-6732l3366-6097zm-3366 0zm6732 6097z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M15033 3285l3366 6097h-6732l3366-6097zM11667 3285zM18399 9382z"
                    />
                  </g>
                  <g className="com.sun.star.drawing.CustomShape">
                    <path
                      className="BoundingBox"
                      fill="#FFF"
                      d="M14207 2394h1527v1146h-1527z"
                    />
                    <path
                      fill={colorsObj[5] ? colorsObj[5] : "none"}
                      d="M14970 3538h-762V2395h1524v1143h-762z"
                    />
                    <path
                      fill="none"
                      stroke="#3465A4"
                      d="M14970 3538h-762V2395h1524v1143h-762z"
                    />
                    <text className="TextShape">
                      <tspan
                        className="TextParagraph"
                        fontFamily="Liberation Sans, sans-serif"
                        fontSize={635}
                        fontWeight={400}
                      >
                        <tspan className="TextPosition" x={14795} y={3187}>
                          <tspan>5</tspan>
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
