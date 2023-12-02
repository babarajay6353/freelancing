import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Link, Image, GridItem, Button} from '@chakra-ui/react'


export default function LimitedEdition() {
  return (
    <>
    <Box className='limi_edi_prnt'>
        <Container maxW='1320px' className='contant_padd'>
            <SimpleGrid columns={12} columnGap={6} rowGap={0}>
                <GridItem colSpan={[12, 12, 12, 12, 6]} className='colol_marg'>
                    <Box className='limited_gri_box'>
                        <Heading as='h1'>Exclusive Access</Heading>
                        <Image src="./img/NFTnft_img.png" alt="" />
                        <Text>Learn, buy , enjoy and sell</Text>
                        <Link href='#' className='explore_in_aro'><Image src="./img/right_arrow.svg" alt="" />Explore</Link>
                        <Image src="./img/nft_28_img.png" alt="" className='nft_28_img' />
                    </Box>                
                </GridItem>
                <GridItem colSpan={[12, 12, 12, 12, 1]}></GridItem>
                <GridItem colSpan={[12, 12, 12, 12, 5]}>
                    <Box className='time_right_box'>
                        <Heading as='h1'>The Time is Right</Heading>
                        <Text className="spes_p_1">The luxury pre-owned watch market has enjoyed steady and impressive growth in recent years, with certain models out-performing traditional investment options such as property and the stock market. At Slice of Time (SoT), we have used our decades of experience, knowledge and expertise to carefully curate a selection of watches that we've identified as having exciting growth opportunities. </Text>
                        <Heading as='h2'>How can I own a<br />fraction of a watch?</Heading>
                        <Text className="spes_p_2">With prices soaring for a range of popular
                            models, many collectors are unable to save the
                            necessary funds quickly enough, as the watch
                            price accelerates faster than their rate of
                            saving. Fractional ownership offers customers
                            the opportunity to diversify their collection,
                            with a fractional stake possible in watches that
                            they hadn't previously considered attainable.
                            By breaking down a watch's value into more
                            Have it, Sell it and grow your money
                            Explore affordable fractions, the collector is able to build up an impressive portfolio steadily and
                            consistently.
                        </Text>                        
                    </Box> 
                </GridItem>                               
            </SimpleGrid>
        </Container>
    </Box>
    </>
  )
}
