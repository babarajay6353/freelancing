import React, {useState} from 'react'
import { Box, Heading, Container, SimpleGrid, GridItem, Image, Text, Button } from '@chakra-ui/react'


export default function LatestNfts() {
    const [count, setCount] = useState(0);
    const Qty = 12;
    function handlePlus() {
        if (count < Qty) {
        setCount(count + 1);
        }
    }
    function handleMinus() {
        if (count > 0) {
        setCount(count - 1);
        }
    }
  return (
    <>
        <Box className='latestnfts_main explyer_bg_box'>
            <Container maxW='1130px'>
                <Box className='latest_title'>
                    <Heading as='h3'>Latest NFTs</Heading>
                </Box>
                <SimpleGrid columns={12} columnGap={4} rowGap={12} >
                <GridItem colSpan={[12, 6, 6, 4]}>
                        <Box className='rolex_bg_box'>
                            <div className='min_slid'>
                                    <Box className='rolex_min_box'>
                                        <Image src="/img/nft_01_img.png" className='slick_img_rolex' altr="" />
                                        <a href='/rolexuniqubloe' className='submariner_link'>Rolex Milgauss<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                        <Heading as="h2">Ref. 116400GV</Heading>                               
                                        <Box className='sli_pri_frec_fun_bx'>
                                            <Text>Price:   <span>£9500</span></Text>
                                            <Text>Fractions:  <span>47/100</span></Text>
                                            <Text>Fraction Price:  <span>£95.00</span></Text>
                                        </Box>
                                        <Box className='qntt_box'>
                                            <Heading as="h2">Quantity:</Heading>

                                            <input
                                            type="text"
                                            min="0"
                                            value={count}
                                            onClick={() => setCount(0)}
                                            />
                                            <Box className='quun_btn_arow_bx'>
                                                <button onClick={handlePlus}><Image src="/img/quun_top_arow.svg" className='quun_top_arow' altr="" /></button>
                                                <button onClick={handleMinus}><Image src="/img/quun_bot_arow.svg" className='quun_bot_arow' altr="" /></button>
                                            </Box>                                                                               
                                        </Box>
                                        <Button className='wallet_btn slid_btn raise'>Order Now</Button>
                                    </Box>
                                </div>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 6, 6, 4]}>
                        <Box className='rolex_bg_box'>
                            <div className='min_slid'>
                                    <Box className='rolex_min_box'>
                                        <Image src="/img/nft_02_img.png" className='slick_img_rolex' altr="" />
                                        <a href='/rolexuniqubloe' className='submariner_link'>Rolex Explorer II<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                        <Heading as="h2">Ref. 16570 White Dial</Heading>                               
                                        <Box className='sli_pri_frec_fun_bx'>
                                            <Text>Price:   <span>£9000</span></Text>
                                            <Text>Fractions:  <span>47/100</span></Text>
                                            <Text>Fraction Price:  <span>£90.00</span></Text>
                                        </Box>
                                        <Box className='qntt_box'>
                                            <Heading as="h2">Quantity:</Heading>

                                            <input
                                            type="text"
                                            min="0"
                                            value={count}
                                            onClick={() => setCount(0)}
                                            />
                                            <Box className='quun_btn_arow_bx'>
                                                <button onClick={handlePlus}><Image src="/img/quun_top_arow.svg" className='quun_top_arow' altr="" /></button>
                                                <button onClick={handleMinus}><Image src="/img/quun_bot_arow.svg" className='quun_bot_arow' altr="" /></button>
                                            </Box>                                                                               
                                        </Box>
                                        <Button className='wallet_btn slid_btn raise'>Order Now</Button>
                                    </Box>
                                </div>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 6, 6, 4]}>
                        <Box className='rolex_bg_box'>
                            <div className='min_slid'>
                                    <Box className='rolex_min_box'>
                                        <Image src="/img/nft_03_img.png" className='slick_img_rolex' altr="" />
                                        <a href='/rolexuniqubloe' className='submariner_link'>Rolex Day-Date<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                        <Heading as="h2">Ref. 118205. Pink Diamond Dial</Heading>                               
                                        <Box className='sli_pri_frec_fun_bx'>
                                            <Text>Price:   <span>£25000</span></Text>
                                            <Text>Fractions:  <span>47/100</span></Text>
                                            <Text>Fraction Price:  <span>£250.00</span></Text>
                                        </Box>
                                        <Box className='qntt_box'>
                                            <Heading as="h2">Quantity:</Heading>

                                            <input
                                            type="text"
                                            min="0"
                                            value={count}
                                            onClick={() => setCount(0)}
                                            />
                                            <Box className='quun_btn_arow_bx'>
                                                <button onClick={handlePlus}><Image src="/img/quun_top_arow.svg" className='quun_top_arow' altr="" /></button>
                                                <button onClick={handleMinus}><Image src="/img/quun_bot_arow.svg" className='quun_bot_arow' altr="" /></button>
                                            </Box>                                                                               
                                        </Box>
                                        <Button className='wallet_btn slid_btn raise'>Order Now</Button>
                                    </Box>
                                </div>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Container>
        </Box>
    </>
  )
}

