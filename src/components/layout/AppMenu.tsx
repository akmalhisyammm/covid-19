import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

const AppMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Menu" icon={<BiMenu />} variant="ghost" />
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AppMenu;
