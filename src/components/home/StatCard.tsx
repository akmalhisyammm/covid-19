import { Box, Flex, Skeleton, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';

type StatCardProps = {
  type: 'confirmed' | 'recovered' | 'deaths';
  data: number;
  isLoading: boolean;
};

const StatCard = ({ type, data, isLoading }: StatCardProps) => {
  const cardBackgroundColor = () => {
    switch (type) {
      case 'confirmed':
        return 'linear(to-r, orange.700, orange.400)';
      case 'recovered':
        return 'linear(to-r, teal.700, teal.400)';
      case 'deaths':
        return 'linear(to-r, red.700, red.400)';
    }
  };

  return (
    <Skeleton borderRadius={12} isLoaded={!isLoading} fadeDuration={2}>
      <Flex
        bgGradient={cardBackgroundColor()}
        color="gray.100"
        boxShadow="0px 16px 16px -12px rgba(0, 0, 0, 0.4)"
        height={100}
        borderRadius={12}
        alignItems="center"
        justifyContent="center">
        <Box>
          <Text fontSize="1.25em" fontWeight="semibold">
            <CountUp start={0} end={data} duration={2} separator="," />
          </Text>
          <Text textTransform="uppercase" fontWeight="light" fontSize="0.6em" letterSpacing={4}>
            {type}
          </Text>
        </Box>
      </Flex>
    </Skeleton>
  );
};

export default StatCard;
