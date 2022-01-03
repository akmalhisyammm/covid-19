import { Box } from '@chakra-ui/react';

import Layout from 'components/layout';
import GlobalSection from 'components/home/GlobalSection';
import CountrySection from 'components/home/CountrySection';
import IndonesiaSection from 'components/home/IndonesiaSection';

const Home = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <GlobalSection />
        <CountrySection />
        <IndonesiaSection />
      </Box>
    </Layout>
  );
};

export default Home;
