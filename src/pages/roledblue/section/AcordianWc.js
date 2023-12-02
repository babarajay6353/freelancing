import React from 'react'
import { Box, Heading, Container, SimpleGrid, GridItem, Image, Text, Button } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export default function AcordianWc() {
  return (
    <>
    <Box className='acordianwc_min'>
        <Container maxW='1280px'>
            <SimpleGrid columns={12} columnGap={6} rowGap={6} >
                <GridItem colSpan={[12, 12, 12, 6]}>
                    <Box className='acodi_grid_lf'>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem className="acodi_head">
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Attributes
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className="acodi_body">
                                    <Text className='creator_P'>Creator:<span className='creator_P_spn'>Bitgraphix </span></Text>
                                    <Text>Creator:<span className='creator_P_spn'>Bitgraphix </span></Text>
                                </AccordionPanel>
                            </AccordionItem>                
                        </Accordion>              
                    </Box>
                </GridItem>
                <GridItem colSpan={[12, 12, 12, 6]}>
                    <Box className='acoDi_grid_lf'>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem className="acodi_head">
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Price History
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className="acodi_body acodi_body_v2">
                                    <Box className='acodi_span_ds'>
                                        <Text className='p_one_ad'>256 PIP</Text>
                                        <Text className='acodi_span'>28.04.2022</Text>
                                    </Box>    
                                    <Box className='acodi_span_ds '>
                                        <Text className='p_one_ad'>150 PIP</Text>
                                        <Text className='acodi_span'>15.05.2022</Text>
                                    </Box>  
                                    <Box className='acodi_span_ds'>
                                        <Text className='p_one_ad'>130 PIP</Text>
                                        <Text className='acodi_span'>10.04.2022</Text>
                                    </Box>                                                                      
                                </AccordionPanel>
                            </AccordionItem>                
                        </Accordion>              
                    </Box>
                </GridItem>  
                <GridItem colSpan={[12, 12, 12, 12]}>
                    <Box className='acoDi_grid_lf'>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem className="acodi_head">
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Listing
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className="acodi_body acodi_body_v2">
                                    <Box className='oxea_min_box'>
                                        <Box className='oxea_P_img'>
                                            <Image src="./img/listin_ic.svg" alt="" className='listin_ic' />
                                            <Text className='oxea_P'>0xea222c5c140a8e11fb2713846ec48d8d7f561edd</Text>
                                        </Box>
                                        <Box className='bg_grd_p'>
                                            <Text><span>1/1</span> are listed for <span>10</span> oken.</Text>
                                        </Box>
                                        <button className='blac_btn murg_btn pulse'>Connect Wallet</button>
                                    </Box>    
                                    <Box className='oxea_min_box oxea_min_box_v2'>
                                        <Box className='oxea_P_img'>
                                            <Image src="./img/listin_ic.svg" alt="" className='listin_ic' />
                                            <Text className='oxea_P'>0xea222c5c140a8e11fb2713846ec48d8d7f561edd</Text>
                                        </Box>
                                        <Box className='bg_grd_p'>
                                            <Text><span>1/1</span> are listed for <span>10</span> oken.</Text>
                                        </Box>
                                        <button className='blac_btn murg_btn pulse'>Connect Wallet</button>
                                    </Box>
                                    <Box className='oxea_min_box'>
                                        <Box className='oxea_P_img'>
                                            <Image src="./img/listin_ic.svg" alt="" className='listin_ic' />
                                            <Text className='oxea_P'>0xea222c5c140a8e11fb2713846ec48d8d7f561edd</Text>
                                        </Box>
                                        <Box className='bg_grd_p'>
                                            <Text><span>1/1</span> are listed for <span>10</span> oken.</Text>
                                        </Box>
                                        <button className='blac_btn murg_btn pulse'>Connect Wallet</button>
                                    </Box>                                                                     
                                </AccordionPanel>
                            </AccordionItem>                
                        </Accordion>              
                    </Box>
                </GridItem>         
                <GridItem colSpan={[12, 12, 12, 12]}>
                    <Box className='acoDi_grid_lf'>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem className="acodi_head">
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Direct Offers
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className="acodi_body acodi_body_v2">
                                                                                                        
                                </AccordionPanel>
                            </AccordionItem>                
                        </Accordion>              
                    </Box>
                </GridItem>      
                <GridItem colSpan={[12, 12, 12, 12]}>
                    <Box className='acoDi_grid_lf'>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem className="acodi_head">
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Trade History
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className="acodi_body acodi_body_v2">
                                                                                                        
                                </AccordionPanel>
                            </AccordionItem>                
                        </Accordion>              
                    </Box>
                </GridItem> 
            </SimpleGrid>
        </Container>        
    </Box>
    </>
  )
}
