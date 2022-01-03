import { Skeleton, useColorMode } from '@chakra-ui/react';
import { ResponsiveLine, Serie } from '@nivo/line';

type StatChartProps = {
  data: Serie[];
  isLoading: boolean;
};

const initialData = [
  {
    id: 'japan',
    color: 'hsl(14, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 7,
      },
      {
        x: 'helicopter',
        y: 96,
      },
      {
        x: 'boat',
        y: 83,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(244, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 287,
      },
      {
        x: 'helicopter',
        y: 49,
      },
      {
        x: 'boat',
        y: 173,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(92, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 154,
      },
      {
        x: 'helicopter',
        y: 169,
      },
      {
        x: 'boat',
        y: 186,
      },
    ],
  },
];

const StatChart = ({ data, isLoading }: StatChartProps) => {
  const { colorMode } = useColorMode();

  return (
    <Skeleton height={400} borderRadius={12} isLoaded={!isLoading} fadeDuration={2}>
      <ResponsiveLine
        data={isLoading ? initialData : data}
        theme={{
          textColor: colorMode === 'light' ? 'black' : 'white',
          tooltip: {
            container: {
              color: colorMode === 'light' ? 'black' : 'white',
              backgroundColor: colorMode === 'light' ? 'white' : 'black',
            },
          },
        }}
        colors={isLoading ? initialData.map((data) => data.color) : data.map((data) => data.color)}
        margin={{ top: 20, right: 110, bottom: 90, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: [],
          legend: 'Date',
          legendOffset: 20,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Total',
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        enableArea={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 85,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Skeleton>
  );
};

export default StatChart;
