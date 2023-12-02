import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Image, GridItem, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function TheGears () {
  return (
    <>
    <Box className='thegeas_padi_box'>
        <Box className='thegeas_balc_box'>
            <Container maxW='1400px' className='cover_bagroung_wath'>               
                <SimpleGrid columns={12} columnGap={0} rowGap={0}>
                    <GridItem colSpan={[12, 12, 12, 6, 6]}>
                        <Box className='thegeas_grid_box'>
                            <Heading as="h3">The gears start turning</Heading>
                            <Text className='the_gears_P1'>Once a watch has been identified by our team of experts, our innovative system will mint a unique NFT that is linked in value to that real-world watch, and then this NFT is ‘sharded’ into up to 1,000 individual fractions. Investors, once registered on our platform, will be able to purchase their fractions directly and own a stake in that actual watch.</Text>
                            <Text className='the_gears_P2'>Once an NFT has been fractionalized and those fractions are available to purchase on our platform, there will never be more fractions released – it is a fixed, closed supply.</Text>
                            <Text className='the_gears_P3'>The specifics of the watch will be made available on our platform, along with a detailed description, high quality images and historical data. </Text>                        
                            <Text className='the_gears_P4'>As part of our ongoing obligation and commitment, the watch will remain in a fully-insured secure storage until such time that the fraction-holders vote to trigger a sale. Slice of Time (SoT) will retain no ownership interest in the timepiece, and it will be 100% community-owned.</Text>
                            <Link to='/nfts' className='blac_btn pulse'>Order Now</Link>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 12, 12, 6, 6]}>
                        <Box className='thegeas_grid_img_box'>
                            <Heading as="h4">Watch NFT</Heading>
                            <Image src='/img/watch_nft_img_gea.png' className='bnnr_img' />                        
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Container>
        </Box>
    </Box>
    </>
  )
}
