import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <Box className='footer'>
        <Box className='ftr_logo'>
          <Image src="/img/logo.svg" alt="" />
        </Box>
        <Image src="/img/SliceofTime.png" alt="" />
        <ul className='footer_links'>
          <li>
            <Link to='/'>Watches</Link>
          </li>
          <li>
            <Link to='/'>Services</Link>
          </li>
          <li>
            <Link to='/'>About Us</Link>
          </li>
          <li>
            <Link to='/'>Profit</Link>
          </li>
        </ul>
        <ul className='footer_social'>
          <li>
            <a href='#'><Image src='/img/social_01.svg' /> </a>
          </li>
          <li>
            <a href='#'><Image src='/img/social_02.svg' /> </a>
          </li>
          <li>
            <a href='#'><Image src='/img/social_03.svg' /> </a>
          </li>
        </ul>
        <Text className='cprgt_p'>TimePiece. All Rights Reserved. (c) 2022 Powered by <a href='#'>Bitgraphix</a></Text>
      </Box>
    </>
  )
}
