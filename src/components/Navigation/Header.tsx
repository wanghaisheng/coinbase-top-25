import { MainColorSet } from '@/theme/types';
import { Box, Flex, HStack, Show, Text, useTheme } from '@chakra-ui/react';
import Navigation from './Navigation';
import dynamic from 'next/dynamic';
import NavLink from 'next/link';

const Header = () => {
  const { colors } = useTheme();
  const { white, black200 } = colors as MainColorSet;

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
    <Box w='full' bg={black200}>
      <HStack
        justifyContent='space-between'
        maxW='1144px'
        w='full'
        mx='auto'
        h='66px'
        px='16px'
      >
        <NavLink href={'/'} passHref shallow>
          <Text color={white}>Bright Sight</Text>
        </NavLink>
        <Navigation />
        <Show above='md'>
          <Flex justifyContent='center' minW='190px'>
            <WalletMultiButtonDynamic />
          </Flex>
        </Show>
      </HStack>
    </Box>
  );
};

export default Header;
