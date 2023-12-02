import React, {useState} from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Link, Image, GridItem, Button} from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OwnPeice() {
    var settings = {    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
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
    <Box className='ownpeice_prnt'>
        <Box className='ownpeice_blak'>
             <Container maxW='1300px'>
              <SimpleGrid columns={12} columnGap={0} rowGap={0}>
                    <GridItem colSpan={[12, 12, 12, 12, 6]} className='oun_prhistoy_grd'>
                        <Box className='own_peice'>                        
                            <Heading as='h5'>Own a peice of History</Heading>
                            <Heading as='h2'>Membership has it’s privledges</Heading>
                            <Text>All the watches have been painstakingly chosen for their quality, with special consideration given to their age, provenance, condition, and scarcity.</Text>
                            <button className='wallet_btn blac_btn pulse'>Connect Wallet</button>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 12, 12, 12, 6]}>
                    <Box className='slid_prnt_min'>
                        <Slider {...settings} className="slid_prnt">
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/slid_rolex_img.png" className='slick_img_rolex' altr="" />
                                    <a href='/rolexuniqubloe' className='submariner_link'>Rolex Submariner   <Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 16610 Black Dial</Heading>                               
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
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/slid_rolex_img.png" className='slick_img_rolex' altr="" />
                                    <a href='/rolexuniqubloe' className='submariner_link'>Rolex Submariner   <Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 16610 Black Dial</Heading>                               
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
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/slid_rolex_img.png" className='slick_img_rolex' altr="" />
                                    <a href='/rolexuniqubloe' className='submariner_link'>Rolex Submariner   <Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 16610 Black Dial</Heading>                               
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
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/slid_rolex_img.png" className='slick_img_rolex' altr="" />
                                    <a href='/rolexuniqubloe' className='submariner_link'>Rolex Submariner   <Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 16610 Black Dial</Heading>                               
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
                        </Slider>
                    </Box>                
                    </GridItem>
              </SimpleGrid>
            </Container>
        </Box>
    </Box>
  )
}
