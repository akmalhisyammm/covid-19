import { Box } from '@chakra-ui/react';

import { CountrySection, GlobalSection, IndonesiaSection } from 'components/home';
import Layout from 'components/layout';

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
