import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useTheme,
} from '@chakra-ui/react';
import { MainColorSet } from '@/theme/types';
import Search from '@/components/Search/Search';
import ProposalTable from '@/components/Proposals/ProposalTable';

const content = [
  {
    index: 1,
    text: 'Data consumers post reward bounties in return for data.',
  },
  { index: 2, text: 'Proposers can post a bond to answer a data request.' },
  {
    index: 3,
    text: 'If a proposal goes unchallenged, the proposer receives the reward after liveness.',
  },
];

const Proposals = () => {
  const { colors } = useTheme();
  const { bluePrimary, background, white, black } = colors as MainColorSet;

  return (
    <>
      <Flex w='full' bg={black}>
        <VStack mx='auto' px='16px' maxW='1144px' minW='343px' w='full'>
          <VStack bg={black} w='full' pb='40px'>
            <HStack my='20px' w='full' justifyContent='flex-start'>
              <Image />
              <Text
                textStyle='H1'
                color={white}
                fontSize={'clamp(2.5rem, 2rem + 2.5vw, 4rem)'}
              >
                Propose answers to <span color={bluePrimary}>925</span> requests
              </Text>
            </HStack>
            <Flex
              justifyContent='space-between'
              flexDir={{ base: 'column', md2: 'row' }}
              w='full'
              px='32px'
              py='24px'
              gap='8px'
              bg='#2D2A2F'
            >
              {content.map((item) => {
                return (
                  <HStack>
                    <Flex alignItems='flex-start' h='full'>
                      <Box w='22px' h='22px' bg={white} borderRadius='50%'>
                        <Text
                          textStyle='H6'
                          fontWeight='700'
                          color={black}
                          textAlign='center'
                        >
                          {item.index}
                        </Text>
                      </Box>
                    </Flex>
                    <Flex
                      alignItems='flex-start'
                      maxW={{ base: 'full', md2: '270px' }}
                      h='full'
                    >
                      <Text textStyle='Body' color={white}>
                        {item.text}
                      </Text>
                    </Flex>
                  </HStack>
                );
              })}
            </Flex>
          </VStack>
        </VStack>
      </Flex>
      <Flex w='full' bg={white}>
        <Flex mx='auto' px='16px' maxW='1144px' minW='343px' w='full'>
          <Search />
        </Flex>
      </Flex>
      <Flex w='full' pb='64px' bg={background}>
        <Flex mx='auto' maxW='1144px' minW='343px' w='full'>
          <ProposalTable />
        </Flex>
      </Flex>
    </>
  );
};

export default Proposals;