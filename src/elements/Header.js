import React, {useState, useEffect} from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
  
  export default function WithSubnavigation() {
    
    const { isOpen, onToggle } = useDisclosure();
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    }, []);

    return (
      <Box className={scroll ? "header scrolled" : "header"}>
        <Flex
                    
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
        //   borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, lg: 'auto' }}
            
            display={{ base: 'flex', lg: 'none' }}>
            <IconButton
              className='toggle_btn'
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', lg: 'start' }} className="desk_nave">
            <Link to="/" className='dd_none'>
              <Image src='/img/logo.svg' alt='' />
            </Link>
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <Box className="deskName">
                <ul>
                  <li>
                    <Link to="/nfts">Watches</Link>
                  </li>
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                  <li>
                    <Link to="/"><Image src='/img/logo.svg' alt="" /></Link>
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
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <Box className='mobile_clps'>
            <ul>
              <li>
                <Link to="/nfts">Watches</Link>
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
    );
  }
  