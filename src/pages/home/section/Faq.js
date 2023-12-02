
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


export default function Faq() {
  return (
    <>
     <Box className='faq_prnt Faq_prnt'>
        <Container maxW='1280px'>
            <Heading as='h3'>F.A.Q.</Heading>
            <Accordion allowMultiple>               
                <AccordionItem className='item_one'>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' className='some_ques_titel'>
                                How does it work?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            Once our team at Slice of Time (SoT) has identified a watch that meets our selection criteria, it’ll be made available on our site, along with a detailed description, high quality images and historical data. Each watch will have a unique NFT minted (with the NFT value pegged to the watch’s in perpetuity), and then this NFT will be fractionalised into up to 1000 fractional NFTs (fNFTs). SoT customers, once registered, will be able to purchase their fractions and hold them in their dedicated customer wallets.
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>                
                <AccordionItem className='item_one'>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' className='some_ques_titel'>
                                Who owns the watches?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> Slice of Time own all the watches that are listed for sale, and provide the data, images and information pertaining to it. The NFT minting and fractionalisation processes are carried out in-house, and those fractions are then made available on our platform. </Text>                           
                        </AccordionPanel>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text>Once all fractions have been purchased by SoT customers, the underlying watch is considered SOLD, and the funds from the fractional sale will be transferred to SoT. </Text>                            
                        </AccordionPanel>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text>Slice of Time will retain no ownership interest in the timepiece, and it will be 100% fraction-holder owned.As part of Slice of Time’s obligation and commitment, the watch will remain in fully-insured secure storage, until such time that a majority fraction-holder vote triggers a sale. </Text>                            
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>             
                <AccordionItem className='item_one'>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' className='some_ques_titel'>
                                How are the watches chosen?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> All watches considered for fractional ownership are hand-picked by our own experts, with only those deemed to be ‘best-in-class’ put forward for sale. All the watches have been painstakingly chosen for their quality, with special consideration given to their age, provenance, condition, and scarcity. Each watch’s historical price data, market factors, detailed descriptions and high-quality images are all presented on the platform.</Text>                           
                        </AccordionPanel>
                        
                    </>
                    )}
                </AccordionItem>   
                <AccordionItem className='item_one'>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' className='some_ques_titel'>
                                Why not just buy the watch outright?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> With prices soaring for a range of popular models, many customers are unable to save the necessary funds quickly enough, as the watch price accelerates faster than their rate of saving. Fractional ownership offers customers the opportunity to diversify their collection, with a stake possible in watches that they hadn’t previously considered attainable. It is also a great platform for micro-investors, keen on dipping their toe into the market, as it were.</Text>                           
                        </AccordionPanel>                        
                    </>
                    )}
                </AccordionItem>       
                <AccordionItem className='item_one'>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' className='some_ques_titel'>
                                How am I protected?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> While the crypto, NFT and blockchain space is in its relative infancy and government regulation is still developing, the sector is still largely unregulated. Slice of Time (SoT) has made the decision, nonetheless, to hold itself to the highest current UK FCA standards that are present in parallel sectors, for maximum customer confidence and protection. These include, but are not limited to, only withdrawing funding once all fractions of a watch are sold, securing and safekeeping all assets in fully-insured vaults, monthly physical inspections, regular price audits, open lines of communication with fraction-holders, and clear and legible terms and conditions. KYC protocols will be in place to safeguard against fraudulent practices. </Text>                           
                        </AccordionPanel>   
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> Fraction-holders will have the opportunity to vote on decisions such as when to trigger a price audit, when to sell and when to hold. In the event of a sale being triggered, all funds (minus administrative costs) will be distributed among the fraction-holders on a pro-rata basis. </Text>                           
                        </AccordionPanel>                       
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> As with all investments, past success is no guarantee of future performance, and as such, no promise is made on growth targets. </Text>                           
                        </AccordionPanel>                       
                    </>
                    )}
                </AccordionItem>  
                <AccordionItem className='item_one'>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' className='some_ques_titel'>
                                Is Slice of Time an investment platform?
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> No, Slice of Time is a platform primarily designed to open up the world of luxury watches to a wider global audience. Year-on-year growth, while great for watch collectors, is pricing out many watch enthusiasts from entering the market, leading to a growing chasm between the haves and have-nots. </Text>                           
                        </AccordionPanel>   
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text>Our platform allows enthusiasts to buy fractions in iconic watches for as little at £50, providing access to a collection that would otherwise be unattainable. </Text>                           
                        </AccordionPanel>                       
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> Slice of Time will provide engaging features such as AR integration, blog options, forums, group chats, metaverse linkups and many more.  </Text>                           
                        </AccordionPanel>                       
                        <AccordionPanel pb={4} className='accordi_tex'>
                            <Text> Any gains or losses derived from the change in value of the watches that underpin the fractions is incidental, and financial gain should not be the driving factor or motivation when buying fractional NFTs.</Text>                           
                        </AccordionPanel>                    
                    </>
                    )}
                </AccordionItem>  
            </Accordion>
        </Container>
     </Box>
    </>
  )
}
