import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

import AppMenu from './AppMenu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      width="full"
      height={100}
      backgroundColor={colorMode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(45, 55, 72, 0.7)'}
      backdropFilter="blur(10px)"
      boxShadow="0px 4px 8px 1px rgba(0, 0, 0, 0.1);"
      position="fixed"
      zIndex={5}>
      <Flex as="nav" maxWidth={800} height="full" margin="0 auto" alignItems="center" padding={4}>
        <Link href="/" legacyBehavior passHref>
          <ChakraLink>
            <Flex alignItems="center">
              <Image src="/covid19-logo.png" alt="logo" width={50} />
              <Box marginLeft={4}>
                <Heading as="h1" fontSize={['md', 'xl']}>
                  COVID-19
                </Heading>
                <Text as="small">Global - Indonesia</Text>
              </Box>
            </Flex>
          </ChakraLink>
        </Link>

        <Grid templateColumns="repeat(2, 1fr)" gap={1} marginLeft="auto">
          <ThemeToggle />
          <AppMenu />
        </Grid>
      </Flex>
    </Box>
  );
};

export default Header;
