import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

import Layout from 'components/layout';
import {
  AdditionSection,
  CumulativeSection,
  DailySection,
  HeroSection,
} from 'components/indonesia';

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
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          <CumulativeSection />
          <AdditionSection />
        </SimpleGrid>
        <DailySection />
      </Box>
    </Layout>
  );
};

export default Indonesia;
