import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useGlobalStat } from 'hooks';
import { DateTime } from 'luxon';

import Layout from 'components/layout';
import StatCard from 'components/home/StatCard';

const Home = () => {
  const { data, isLoading, isError } = useGlobalStat();

  if (isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Layout>
      <Box textAlign="center">
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
      </Box>
    </Layout>
  );
};

export default Home;
