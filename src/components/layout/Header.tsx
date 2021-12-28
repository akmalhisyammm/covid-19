import { Flex, Grid, Heading, Link as ChakraLink } from '@chakra-ui/react';
import AppMenu from './AppMenu';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" alignItems="center" paddingY={8}>
      <ChakraLink href="/" passHref>
        <Heading as="h1" fontSize={['md', 'xl']}>
          Covid-19 Statistic
        </Heading>
      </ChakraLink>

      <Grid templateColumns="repeat(2, 1fr)" gap={1} marginLeft="auto">
        <ThemeToggle />
        <AppMenu />
      </Grid>
    </Flex>
  );
};

export default Header;
