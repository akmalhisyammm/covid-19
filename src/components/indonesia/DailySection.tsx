import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Select, Text } from '@chakra-ui/react';
import { Serie } from '@nivo/line';
import { DateTime } from 'luxon';
import { useIndonesiaDailyStat } from 'hooks';
import { SWRIndonesiaDailyStat } from 'types';

import StatChart from 'components/stats/StatChart';

const DailySection = () => {
  const [modifiedData, setModifiedData] = useState<Serie[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<number | undefined>();

  const indonesiaDailyStat: SWRIndonesiaDailyStat = useIndonesiaDailyStat();

  useEffect(() => {
    const manipulateData = () => {
      const slicedData = indonesiaDailyStat.data?.slice(selectedPeriod);

      const newData = [
        {
          id: 'Confirmed',
          color: '#ED8936',
          data: slicedData?.map((data) => ({
            x: DateTime.fromISO(data.tanggal).toFormat('DD'),
            y: data.positif,
          })),
        },
        {
          id: 'Recovered',
          color: '#38B2AC',
          data: slicedData?.map((data) => ({
            x: DateTime.fromISO(data.tanggal).toFormat('DD'),
            y: data.sembuh,
          })),
        },
        {
          id: 'Deaths',
          color: '#F56565',
          data: slicedData?.map((data) => ({
            x: DateTime.fromISO(data.tanggal).toFormat('DD'),
            y: data.meninggal,
          })),
        },
      ];

      console.log(newData);

      setModifiedData(newData);
    };

    manipulateData();
  }, [indonesiaDailyStat.data, selectedPeriod]);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.target.value ? setSelectedPeriod(Number(e.target.value)) : setSelectedPeriod(undefined);
  };

  if (indonesiaDailyStat.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box>
      <Box>
        <Text marginBottom={4}>Visualize by period:</Text>
        <Select placeholder="Select period..." marginBottom={4} onChange={handleSelectChange}>
          <option value={-7}>Last 7 days</option>
          <option value={-30}>Last 30 days</option>
          <option value={-60}>Last 60 days</option>
        </Select>
      </Box>

      {selectedPeriod && (
        <Box height={400}>
          <StatChart data={modifiedData} isLoading={indonesiaDailyStat.isLoading} />
        </Box>
      )}
    </Box>
  );
};

export default DailySection;
