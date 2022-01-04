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
    <Skeleton height={[300, 350, 400]} isLoaded={!isLoading} fadeDuration={2}>
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
        margin={{ top: 40, right: 10, bottom: 20, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[
          {
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -30,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 100,
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
