import { Flex, Heading, Link as ChakraLink, SimpleGrid, Tooltip } from '@chakra-ui/react';
import { SiNextdotjs, SiChakraui } from 'react-icons/si';

const DetailSection = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={4}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl" marginBottom={1}>
          Developer
        </Heading>
        <ChakraLink href="https://github.com/akmalhisyammm" isExternal>
          Muhammad Akmal Hisyam
        </ChakraLink>
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl" marginBottom={2}>
          Tech Stack
        </Heading>
        <Flex>
          <Tooltip label="Next.js">
            <ChakraLink href="https://nextjs.org/" marginX={1} isExternal>
              <SiNextdotjs fontSize={32} />
            </ChakraLink>
          </Tooltip>
          <Tooltip label="Chakra UI">
            <ChakraLink href="https://chakra-ui.com/" marginX={1} isExternal>
              <SiChakraui fontSize={32} />
            </ChakraLink>
          </Tooltip>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl" marginBottom={1}>
          Image Source
        </Heading>
        <ChakraLink href="https://www.freepik.com/" isExternal>
          Freepik
        </ChakraLink>
        <ChakraLink href="https://www.wikipedia.org/" isExternal>
          Wikipedia
        </ChakraLink>
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl" marginBottom={1}>
          API Source
        </Heading>
        <ChakraLink href="https://github.com/mathdroid/covid-19-api" isExternal>
          COVID-19 API by Mathdroid
        </ChakraLink>
        <ChakraLink href="https://github.com/Reynadi531/api-covid19-indonesia-v2" isExternal>
          api-covid19-indonesia-v2 by Reynaldi531
        </ChakraLink>
      </Flex>
    </SimpleGrid>
  );
};

export default DetailSection;
