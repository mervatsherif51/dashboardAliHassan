import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import React from 'react';
import Header from "../../components/Header";

const data = [
  {
    id: "japan",
    color: "hsl(107, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 33,
      },
      {
        x: "helicopter",
        y: 102,
      },
      {
        x: "boat",
        y: 120,
      },
      {
        x: "train",
        y: 143,
      },
      {
        x: "subway",
        y: 193,
      },
      {
        x: "bus",
        y: 17,
      },
      {
        x: "car",
        y: 154,
      },
      {
        x: "moto",
        y: 111,
      },
      {
        x: "bicycle",
        y: 14,
      },
      {
        x: "horse",
        y: 283,
      },
      {
        x: "skateboard",
        y: 88,
      },
      {
        x: "others",
        y: 54,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(240, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 202,
      },
      {
        x: "helicopter",
        y: 3,
      },
      {
        x: "boat",
        y: 284,
      },
      {
        x: "train",
        y: 50,
      },
      {
        x: "subway",
        y: 117,
      },
      {
        x: "bus",
        y: 232,
      },
      {
        x: "car",
        y: 71,
      },
      {
        x: "moto",
        y: 187,
      },
      {
        x: "bicycle",
        y: 66,
      },
      {
        x: "horse",
        y: 93,
      },
      {
        x: "skateboard",
        y: 204,
      },
      {
        x: "others",
        y: 142,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(231, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 50,
      },
      {
        x: "helicopter",
        y: 232,
      },
      {
        x: "boat",
        y: 160,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 128,
      },
      {
        x: "bus",
        y: 230,
      },
      {
        x: "car",
        y: 124,
      },
      {
        x: "moto",
        y: 139,
      },
      {
        x: "bicycle",
        y: 76,
      },
      {
        x: "horse",
        y: 265,
      },
      {
        x: "skateboard",
        y: 241,
      },
      {
        x: "others",
        y: 161,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(298, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 282,
      },
      {
        x: "helicopter",
        y: 123,
      },
      {
        x: "boat",
        y: 294,
      },
      {
        x: "train",
        y: 141,
      },
      {
        x: "subway",
        y: 235,
      },
      {
        x: "bus",
        y: 156,
      },
      {
        x: "car",
        y: 161,
      },
      {
        x: "moto",
        y: 175,
      },
      {
        x: "bicycle",
        y: 226,
      },
      {
        x: "horse",
        y: 282,
      },
      {
        x: "skateboard",
        y: 215,
      },
      {
        x: "others",
        y: 181,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(190, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 141,
      },
      {
        x: "helicopter",
        y: 164,
      },
      {
        x: "boat",
        y: 281,
      },
      {
        x: "train",
        y: 87,
      },
      {
        x: "subway",
        y: 18,
      },
      {
        x: "bus",
        y: 120,
      },
      {
        x: "car",
        y: 39,
      },
      {
        x: "moto",
        y: 83,
      },
      {
        x: "bicycle",
        y: 91,
      },
      {
        x: "horse",
        y: 5,
      },
      {
        x: "skateboard",
        y: 61,
      },
      {
        x: "others",
        y: 198,
      },
    ],
  },
];


const Line = ({isDashboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard?  "280px"  : "75vh" }}>
      
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
  
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
   
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },

        
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}

export default Line;
