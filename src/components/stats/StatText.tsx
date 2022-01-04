import { Box, Skeleton, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';

type StatTextProps = {
  type: 'confirmed' | 'treated' | 'recovered' | 'deaths';
  data: number;
  isLoading: boolean;
};

const StatText = ({ type, data, isLoading }: StatTextProps) => {
  const textColor = () => {
    switch (type) {
      case 'confirmed':
        return 'orange.400';
      case 'treated':
        return 'yellow.400';
      case 'recovered':
        return 'teal.400';
      case 'deaths':
        return 'red.400';
    }
  };

  return (
    <Skeleton margin={4} isLoaded={!isLoading} fadeDuration={2}>
      <Box>
        <Text
          color={textColor()}
          fontSize="1.25em"
          fontWeight="semibold"
          textShadow="0px 2px 16px rgba(0, 0, 0, 0.3)">
          <CountUp start={0} end={data} duration={2} separator="," />
        </Text>
        <Text
          color={textColor()}
          textTransform="uppercase"
          textShadow="0px 2px 16px rgba(0, 0, 0, 0.3)"
          fontWeight="light"
          fontSize="0.6em"
          letterSpacing={4}>
          {type}
        </Text>
      </Box>
    </Skeleton>
  );
};

export default StatText;
