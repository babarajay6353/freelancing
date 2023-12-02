import React, {useState} from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Image, GridItem, Button} from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function MostRecentNfts() {
    var settings = {    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
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
    <>
        <Box className='most_nfts_first_bg'>
            <Box className='most_nfts_first '>
                <Container maxW='1300px'>
                    <Box className='most_nfts_hedng'>
                        <Heading as='h2'>Most Recent NFTs</Heading>
                    </Box>
                    <Box className='slid_prnt_min'>
                            <Slider {...settings} className="slid_prnt">
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
                                <div className='min_slid'>
                                    <Box className='rolex_min_box'>
                                        <Image src="/img/nft_03_img.png" className='slick_img_rolex' altr="" />
                                         <a href='/rolexuniqubloe' className='submariner_link'>Rolex Day<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
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
                                <div className='min_slid'>
                                    <Box className='rolex_min_box'>
                                        <Image src="/img/nft_01_img.png" className='slick_img_rolex' altr="" />
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
                        <Box className='watch_nfts_box'>
                            <Box className='watch_nfts_hedng'>
                                <Heading as="h2">Watch NFTs</Heading> 
                                <Text>Through our innovative fractional ownership model, we harness NFT and blockchain technology to offer customers stakes in a selection of the world’s best watches.</Text>                              
                            </Box>
                        </Box>
                </Container>
            </Box>
            
        </Box>
    </>
  )
}
