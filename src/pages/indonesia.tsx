import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

import Layout from 'components/layout';
import { DailySection, HeroSection } from 'components/indonesia';

const Indonesia = () => {
  const router = useRouter();

  return (
    <Layout title="Indonesia">
      <Button
        background="transparent"
        leftIcon={<FaArrowLeft />}
        onClick={() => router.replace('/')}>
        Back to Home
      </Button>

      <Box textAlign="center">
        <HeroSection />
        <DailySection />
      </Box>
    </Layout>
  );
};

export default Indonesia;
