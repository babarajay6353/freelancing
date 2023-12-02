import React from 'react'
import { Box, Heading, Container, SimpleGrid, GridItem, Select, Image, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function HowItWork() {
  return (
    <>
        <Box className='how_it_bg'>
            <Container maxW='1300'>
                <Box className='how_it_hed'>
                    <Heading as="h2">How it works</Heading>
                    <Text>Have it, Sell it and grow your money</Text>
                </Box>
                <SimpleGrid columns={12} columnGap={4} rowGap={2} >
                    <GridItem colSpan={[12, 12, 6, 4]}>
                        <Box className='gate_time_prnt'>
                            <Box className='time_bordr'>
                                <Box className='responsive_bx_grd'>
                                    <Heading as="h4">Get TimeCoin</Heading>
                                    <Text>Slice of Time identifies a suitable watch, and mints a corresponding NFT with a value pegged to its real-world value</Text>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 12, 6, 4]}>
                        <Box className='gate_time_prnt'>
                            <Box className='time_bordr time_bordr_amrg'>
                                <Box className='responsive_bx_grd'>
                                    <Heading as="h4">Buy NFTs</Heading>
                                    <Text>The NFT is then fractionalisedinto an agreed-upon set quantity</Text>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 12, 6, 4]}>
                        <Box className='gate_time_prnt'>
                            <Box className='time_bordr'>
                                <Box className='responsive_bx_grd'>
                                    <Heading as="h4">Sell and Profit</Heading>
                                    <Text>Once a customer has connected their wallet, they can proceed to purchase fractions to add to that wallet (limits apply)</Text>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </SimpleGrid>
                <Box className='text_wrrk_sscn'>
                    <Text>Those fractions are made available on our platform along with detailed description, images and information relating to the underlying watch</Text>
                </Box>
                <Link to='/nfts' className='btn_hoe_that pulse'>Explore NTFs</Link>
            </Container>
        </Box>
    </>
  )
}
