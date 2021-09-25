// Components/Navbar/Navbar.tsx

import {
  Flex, Text,
} from '@chakra-ui/react';
import { DarkModeToggle } from '../../components/DarkModeToggle/DarkModeToggle';
import To from '../../components/To';

// import Bar from '../../components/Bar';

// declare type Props = {
//     id: string,
// }

export const Navbar = () : JSX.Element => (
  <Flex flexDirection="row" width="100%">
    <Flex
      height="6"
      alignItems="center"
      justifyContent="right"
      pt={9}
      pl="50px"
    >
      <Text pr="50px" color="#FF0066" fontSize="2xl">~</Text>
    </Flex>
    <Flex
      height="6"
      alignItems="center"
      justifyContent="right"
      pt={9}
      width="100%"
    >

      <To name="~$ me" to="" />
      <To name="--work" to="resume" />
      <To name="--blog" to="blog" />
      <To name="--git" to="github" />
      <DarkModeToggle />
    </Flex>

  </Flex>

);
