import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Link, Image, GridItem, Button} from '@chakra-ui/react'

export default function SliOftime() {
  return (
    <>
        <Box className='slicofftime_main'>
            <Container maxW='1220px'>
                <SimpleGrid columns={12} columnGap={0} rowGap={0}>
                    <GridItem colSpan={[12, 12, 12, 6]}>
                        <Box className='sli_of_grid_box'>
                            <Heading as='h4'>Who we are</Heading>
                            <Box className='sli_of_img_ger_box'>
                                <Image src='/img/sli_of_img.png' className='sli_of_img' /> 
                            </Box>
                            <Text>Slice of Time is the newest project introduced by our team at Tempvs Ltd, a respected, experienced, and long-time industry-leader within the UK luxury watch market. Tempvs has been and continue to be reputed pre-owned luxury watch specialists, with over 2 decades of international and local experience, with 10’s of millions in global sales. </Text>
                            <Text>With extensive knowledge, insight and expertise, Tempvs has been able to pair thousands of customers with their dream watches for many years, via our Central London showroom as well as our various online channels. With a reputation for quality, variety and honesty, we have watched on with pride as our customers have grown their collection, benefiting from appreciating market prices.  </Text>
                        </Box>                
                    </GridItem>
                    <GridItem colSpan={[12, 12, 12, 6]}>
                        <Box className='woch_ger_box'>
                            <Image src='/img/sliz_woc_tim_img.png' className='sliz_woc_tim_img' /> 
                            <Box className='contact_us_satt'>
                                <Text>Contact Us</Text>
                                <Box className='linklin_bx'>
                                    <a href='#'><Image src='/img/contact_ic01.svg' className='contact_ic01' /> </a>
                                    <a href='#' className='marg_a'><Image src='/img/contact_ic02.svg' className='contact_ic01' /> </a>
                                    <a href='#'><Image src='/img/contact_ic03.svg' className='contact_ic01' /> </a>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Container>     
        </Box>
    </>
  )
}
