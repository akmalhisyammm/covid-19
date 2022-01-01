import { Box } from '@chakra-ui/react';

import Layout from 'components/layout';
import GlobalSection from 'components/home/GlobalSection';
import CountrySection from 'components/home/CountrySection';

const Home = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <GlobalSection />
        <CountrySection />
      </Box>
    </Layout>
  );
};

export default Home;
