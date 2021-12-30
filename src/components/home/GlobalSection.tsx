import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { useGlobalStat } from 'hooks';
import { SWRGlobalStat } from 'types';

import StatCard from './StatCard';

const GlobalSection = () => {
  const { data, isLoading, isError }: SWRGlobalStat = useGlobalStat();

  if (isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <>
      <Box marginBottom={4}>
        <Heading>Global Data</Heading>
        <Text as="small">Last Updated: {DateTime.fromISO(data?.lastUpdate).toFormat('fff')}</Text>
      </Box>

      <Box>
        <SimpleGrid columns={[1, 1, 3]} gap={4}>
          <StatCard type="confirmed" data={data?.confirmed.value} isLoading={isLoading} />
          <StatCard type="recovered" data={data?.recovered.value} isLoading={isLoading} />
          <StatCard type="deaths" data={data?.deaths.value} isLoading={isLoading} />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GlobalSection;
