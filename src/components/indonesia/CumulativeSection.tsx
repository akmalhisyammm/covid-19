import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { useIndonesiaStat } from 'hooks/indonesia';
import { SWRIndonesiaStat } from 'types/indonesia';

import { StatText } from 'components/stats';

const CumulativeSection = () => {
  const indonesiaStat: SWRIndonesiaStat = useIndonesiaStat();

  if (indonesiaStat.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box>
      <Box>
        <Heading fontSize="2xl">Cumulative Stats</Heading>
        <Text as="small">
          Last Updated: {DateTime.fromISO(indonesiaStat.data?.total.lastUpdate).toFormat('fff')}
        </Text>
      </Box>

      <Box>
        <SimpleGrid columns={2}>
          <StatText
            type="confirmed"
            data={indonesiaStat.data?.total.positif}
            isLoading={indonesiaStat.isLoading}
          />
          <StatText
            type="treated"
            data={indonesiaStat.data?.total.dirawat}
            isLoading={indonesiaStat.isLoading}
          />
          <StatText
            type="recovered"
            data={indonesiaStat.data?.total.sembuh}
            isLoading={indonesiaStat.isLoading}
          />
          <StatText
            type="deaths"
            data={indonesiaStat.data?.total.meninggal}
            isLoading={indonesiaStat.isLoading}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CumulativeSection;
