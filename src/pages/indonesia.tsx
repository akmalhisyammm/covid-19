import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FaArrowLeft } from 'react-icons/fa';

import {
  AdditionSection,
  CumulativeSection,
  DailySection,
  HeroSection,
} from 'components/indonesia';
import Layout from 'components/layout';

const Indonesia = () => {
  const router = useRouter();

  return (
    <Layout>
      <NextSeo title="Indonesia" canonical={`${process.env.NEXT_PUBLIC_WEB_URL}/indonesia`} />

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
