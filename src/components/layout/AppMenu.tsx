import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiMenu } from 'react-icons/bi';

const AppMenu = () => {
  const router = useRouter();

  return (
    <Menu id="menu" isLazy>
      <MenuButton as={IconButton} aria-label="Menu" icon={<BiMenu />} variant="ghost" />
      <MenuList>
        <MenuItem onClick={() => router.push('/indonesia')}>Indonesia</MenuItem>
        <MenuItem onClick={() => router.push('/about')}>About</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AppMenu;
