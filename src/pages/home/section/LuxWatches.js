import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Link, Image, GridItem, Button} from '@chakra-ui/react'

export default function LuxWatches() {
  return (
    <>
        <Box className='lux_watch_min'>          
            <Container maxW='1300px'>
              <SimpleGrid columns={12} columnGap={0} rowGap={0}>
                  <GridItem colSpan={[12, 12, 12, 12, 6]}>
                    <Box className='frst_lux_main'>
                      <Text>Harnessing blockchain technology</Text>
                      <Heading as="h1">Real World <br />Luxury Watches<br />Meet NFTs</Heading>
                        <Box className='explore_main_frst'>
                          <Link href='/' className='explore_in_aro'><Image src="./img/right_arrow.svg" alt="" /></Link>
                          
                        </Box>
                        <Text className='text_in_frst_bx'>Own a stake in a range of carefully selected, luxury high-end watches, through our unique and accessible platform. </Text>
                      <Image src="./img/watc_img.png" alt="" className='watc_img scalimg' />
                    </Box>
                  </GridItem>
                  <GridItem colSpan={[12, 12, 12, 12, 6]}>
                    <Box className='yor_wallet_grid'>
                      <Heading as='h1' className='connect'>Connect</Heading>
                      <Heading as='h2'>Your Wallet</Heading>
                      <button className='wallet_btn pulse'>Connect Wallet</button>
                    </Box>                  
                  </GridItem>
              </SimpleGrid>
            </Container>
            <Image src='/img/banner_bg.png' className='bnnr_img' />
        </Box>
    </>
  )
}
