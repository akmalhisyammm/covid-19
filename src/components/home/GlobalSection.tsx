import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { useGlobalStat } from 'hooks';
import { SWRGlobalStat } from 'types';

import StatCard from './stats/StatCard';

const GlobalSection = () => {
  const globalStat: SWRGlobalStat = useGlobalStat();

  if (globalStat.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <>
      <Box marginBottom={4}>
        <Heading>Global Data</Heading>
        <Text as="small">
          Last Updated: {DateTime.fromISO(globalStat.data?.lastUpdate).toFormat('fff')}
        </Text>
      </Box>

      <Box>
        <SimpleGrid columns={[1, 1, 3]} gap={4}>
          <StatCard
            type="confirmed"
            data={globalStat.data?.confirmed.value}
            isLoading={globalStat.isLoading}
          />
          <StatCard
            type="recovered"
            data={globalStat.data?.recovered.value}
            isLoading={globalStat.isLoading}
          />
          <StatCard
            type="deaths"
            data={globalStat.data?.deaths.value}
            isLoading={globalStat.isLoading}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GlobalSection;
