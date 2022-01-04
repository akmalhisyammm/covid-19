import { Box } from '@chakra-ui/react';

import Layout from 'components/layout';
import { CountrySection, GlobalSection, IndonesiaSection } from 'components/home';

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
