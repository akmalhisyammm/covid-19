import { Box, Button, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

import Layout from 'components/layout';
import DailySection from 'components/indonesia/DailySection';

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
        <Box marginBottom={4}>
          <Heading>Indonesia Data</Heading>
        </Box>
        <DailySection />
      </Box>
    </Layout>
  );
};

export default Indonesia;
