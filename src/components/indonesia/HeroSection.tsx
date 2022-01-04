import { Box, Heading, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box marginY={4}>
      <Heading>Indonesia Data</Heading>
      <Image
        src="/indonesia-flag.png"
        alt="Indonesia Flag"
        margin="18px auto 42px"
        boxShadow="0px 16px 16px -12px rgba(0, 0, 0, 0.3)"
        borderRadius={12}
      />
    </Box>
  );
};

export default HeroSection;
