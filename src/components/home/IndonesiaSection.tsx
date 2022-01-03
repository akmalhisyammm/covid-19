import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowRight } from 'react-icons/fa';
import { DateTime } from 'luxon';
import { useCountryStat } from 'hooks';
import { SWRCountryStat } from 'types';

import StatCard from 'components/stats/StatCard';

const IndonesiaSection = () => {
  const router = useRouter();
  const indonesiaStat: SWRCountryStat = useCountryStat('IDN');

  if (indonesiaStat.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box
      color="gray.100"
      bgGradient="linear(to-r, blue.700, blue.400)"
      boxShadow="0px 16px 16px -12px rgba(0, 0, 0, 0.3)"
      padding={8}
      borderRadius={12}>
      <Box marginBottom={4}>
        <Heading>Indonesia Data</Heading>
        <Text as="small">
          Last Updated: {DateTime.fromISO(indonesiaStat.data?.lastUpdate).toFormat('fff')}
        </Text>
      </Box>

      <Box marginBottom={4}>
        <SimpleGrid columns={1} gap={4}>
          <StatCard
            type="confirmed"
            data={indonesiaStat.data?.confirmed.value}
            isLoading={indonesiaStat.isLoading}
          />
          <StatCard
            type="recovered"
            data={indonesiaStat.data?.recovered.value}
            isLoading={indonesiaStat.isLoading}
          />
          <StatCard
            type="deaths"
            data={indonesiaStat.data?.deaths.value}
            isLoading={indonesiaStat.isLoading}
          />
        </SimpleGrid>
      </Box>

      <Button
        background="transparent"
        rightIcon={<FaArrowRight />}
        onClick={() => router.push('/indonesia')}>
        See Details
      </Button>
    </Box>
  );
};

export default IndonesiaSection;
