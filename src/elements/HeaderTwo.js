import  {useState, React, useEffect } from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Image } from '@chakra-ui/react'

  export default function HeaderTwo() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    }, []);

    const { isOpen, onToggle } = useDisclosure();
  return (
    <>         
        <Box className={scroll ? "head_box scrolled" : "head_box"} >
            <Flex
            className='head_peding_lr'
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                // minH={'60px'}
                // py={{ base: 2 }}
                // px={{ base: 4 }}
                borderBottom={1}
                // borderStyle={'solid'}
                // borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                flex={{ base: 1, lg: 'auto' }}
                ml={{ base: -2 }}
                display={{ base: 'flex', lg: 'none' }}>
                
                <IconButton
                    onClick={onToggle}
                    icon={
                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                    className="toggle_btn"
                />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Text
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    fontFamily={'heading'}
                    color={useColorModeValue('gray.800', 'white')}>
                      <Link href='/'>
                        <Image src='/img/headertwo_logo.svg' alt='' />
                      </Link>
                </Text>

                <Flex display={{ base: 'none', lg: 'flex' }} ml={0} className='head_link_box'>
                  <Box className="deskName deskName_any">
                    <ul>
                      <li>
                        <Link to="/">Watches</Link>
                      </li>
                      <li>
                        <Link to="/">Services</Link>
                      </li>
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Profit</Link>
                      </li>

                    </ul>
                  </Box>
                </Flex>
                </Flex>

                <Stack
                flex={{ base: 1, lg: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>                     
                <button
                    className='head_btn pulse'
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'.400'}
                    href={'#'}
                    _hover={{
                    bg: '.300',
                    }}>
                    Connect Wallet
                </button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
              <Box className="mobile_clps deskName_any">
                <ul>
                  <li>
                    <Link to="/">Watches</Link>
                  </li>
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Profit</Link>
                  </li>

                </ul>
              </Box>
            </Collapse>
        </Box>
    </>
  )
}

