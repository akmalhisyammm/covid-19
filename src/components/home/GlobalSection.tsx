import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';

import { StatCard } from 'components/stats';
import { useGlobalStat } from 'hooks/global';

import type { SWRGlobalStat } from 'types/global';

const GlobalSection = () => {
  const globalStat: SWRGlobalStat = useGlobalStat();

  if (globalStat.isError) return <Text>Failed to fetch global data.</Text>;

  return (
    <Box>
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
    </Box>
  );
};

export default GlobalSection;
