import { Box } from '@chakra-ui/react';

import Layout from 'components/layout';
import GlobalSection from 'components/home/GlobalSection';

const Home = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <GlobalSection />
      </Box>
    </Layout>
  );
};

export default Home;
