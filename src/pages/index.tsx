import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useGlobalStat } from 'hooks';
import { DateTime } from 'luxon';
import CountUp from 'react-countup';

import Layout from 'components/layout';
import Loading from 'components/Loading';
import Error from 'components/Error';

const Home = () => {
  const { data, isLoading, isError } = useGlobalStat();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Layout>
      <Box textAlign="center">
        <Box marginBottom={4}>
          <Heading>Global Data</Heading>
          <Text as="small">Last Updated: {DateTime.fromISO(data.lastUpdate).toFormat('fff')}</Text>
        </Box>

        <Box>
          <SimpleGrid columns={[1, 1, 3]} gap={4}>
            <Flex
              bgGradient="linear(to-r, orange.700, orange.400)"
              color="gray.100"
              boxShadow="0px 16px 16px -12px rgba(0, 0, 0, 0.4)"
              height={100}
              borderRadius={12}
              alignItems="center"
              justifyContent="center">
              <Box>
                <Text fontSize="1.25em" fontWeight="semibold">
                  <CountUp start={0} end={data.confirmed.value} duration={2} separator="," />
                </Text>
                <Text
                  textTransform="uppercase"
                  fontWeight="light"
                  fontSize="0.6em"
                  letterSpacing={4}>
                  Confirmed
                </Text>
              </Box>
            </Flex>
            <Flex
              bgGradient="linear(to-r, teal.700, teal.400)"
              color="gray.100"
              boxShadow="0px 16px 16px -12px rgba(0, 0, 0, 0.4)"
              height={100}
              borderRadius={12}
              alignItems="center"
              justifyContent="center">
              <Box>
                <Text fontSize="1.25em" fontWeight="semibold">
                  <CountUp start={0} end={data.recovered.value} duration={2} separator="," />
                </Text>
                <Text
                  textTransform="uppercase"
                  fontWeight="light"
                  fontSize="0.6em"
                  letterSpacing={4}>
                  Recovered
                </Text>
              </Box>
            </Flex>
            <Flex
              bgGradient="linear(to-r, red.700, red.400)"
              color="gray.100"
              boxShadow="0px 16px 16px -12px rgba(0, 0, 0, 0.4)"
              height={100}
              borderRadius={12}
              alignItems="center"
              justifyContent="center">
              <Box>
                <Text fontSize="1.25em" fontWeight="semibold">
                  <CountUp start={0} end={data.deaths.value} duration={2} separator="," />
                </Text>
                <Text
                  textTransform="uppercase"
                  fontWeight="light"
                  fontSize="0.6em"
                  letterSpacing={4}>
                  Deaths
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
