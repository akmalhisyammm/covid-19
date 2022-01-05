import { Box, Heading, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box marginY={4}>
      <Heading>About</Heading>
      <Image src="/covid19-logo.png" alt="COVID-19 Logo" margin="24px auto 42px" width={200} />
    </Box>
  );
};

export default HeroSection;
