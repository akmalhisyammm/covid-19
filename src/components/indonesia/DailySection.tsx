import { Box, Select, Text } from '@chakra-ui/react';
import { Serie } from '@nivo/line';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import { StatChart } from 'components/stats';
import { useIndonesiaDailyStat } from 'hooks/indonesia';

import type { SWRIndonesiaDailyStat } from 'types/indonesia';

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

      setModifiedData(newData);
    };

    manipulateData();
  }, [indonesiaDailyStat.data, selectedPeriod]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value ? setSelectedPeriod(Number(e.target.value)) : setSelectedPeriod(undefined);
  };

  if (indonesiaDailyStat.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box marginY={8}>
      <Box>
        <Text marginBottom={4}>Visualize by period:</Text>
        <Select placeholder="Select period..." marginBottom={4} onChange={handleSelectChange}>
          <option value={-7}>Last 1 week</option>
          <option value={-14}>Last 2 weeks</option>
          <option value={-21}>Last 3 weeks</option>
          <option value={-28}>Last 4 weeks</option>
        </Select>
      </Box>

      {selectedPeriod && (
        <Box>
          <StatChart data={modifiedData} isLoading={indonesiaDailyStat.isLoading} />
        </Box>
      )}
    </Box>
  );
};

export default DailySection;
