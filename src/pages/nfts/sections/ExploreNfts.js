import React, {useState} from 'react'
import { Box, Heading, Container, SimpleGrid, GridItem, Select, Image, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function ExploreNfts() {
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
        <Box className='explyer_bg_box explyer_bg_box_v22'>
            <Container maxW='1300'>
                <Box className='explyer_heding_box'>
                    <Heading as="h4">Explore NFTs</Heading>
                </Box>
                <Box className='explyer_two_mix'>
                    <Box className='explyer_grd_box explyer_grd_box_v2'>
                        <span>Filter by:</span>
                        <Box className='select_box select_box_v2 '>
                            <Select placeholder='By Brand'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Box className='select_box'>
                            <Select placeholder='By Type'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                    </Box>
                    <Box className='explyer_grd_box '>
                        <span>Sort by:</span>
                        <Box className='select_box select_box_v2 '>
                            <Select placeholder='Sort by:'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Box className='select_box'>
                            <Select placeholder='By Recent'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                    </Box>
                </Box>
                <SimpleGrid columns={12} columnGap={4} rowGap={12} >
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_01.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Submariner<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
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
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_02.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Daytona<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2"> Ref. 116520 Black Dial </Heading>                               
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_03.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Daytona<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 116520 Cream Dial</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£27500</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£275.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_04.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Day-Date 2<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 218238</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£38000</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£380.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_05.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Richard Mille<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2"> Ref. RM011 'Doux Le'</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£325000</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£3250.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_06.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Milgauss<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 116400GV </Heading>                               
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_07.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Explorer II<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2"> Ref. 16570 White Dial</Heading>                               
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_08.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Daytona<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 116523 Diamond Dial </Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£20000</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£200.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_09.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Sea-Dweller<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 116660  Deepsea</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£10000</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£100.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_010.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Sea-Dweller<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 16600</Heading>                               
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_011.png" className='nft_01_img' altr="" />
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_012.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Daytona<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 6239  Paul Newman</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£250000</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£2500.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_013.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Sea-Dweller<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 126600</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£11500</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£115.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_014.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Sky-Dweller<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 326938</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£37500</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£375.00</span></Text>
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_015.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Rolex Submariner<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. 16618 Blue Dial Yellow Gold</Heading>                               
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
                    <GridItem colSpan={[12, 6, 4, 3]}>
                        <Box className='rolex_bg_box rolex_bg_box_any'>
                            <div className='min_slid'>
                                <Box className='rolex_min_box'>
                                    <Image src="/img/Refrolax_img_016.png" className='nft_01_img' altr="" />
                                     <a href='/rolexuniqubloe' className='submariner_link'>Richard Mille<Image src="/img/submariner_aro.svg" className='submariner_aro' altr="" /></a>                               
                                    <Heading as="h2">Ref. RM35-01 Nadal</Heading>                               
                                    <Box className='sli_pri_frec_fun_bx'>
                                        <Text>Price:   <span>£379500</span></Text>
                                        <Text>Fractions:  <span>47/100</span></Text>
                                        <Text>Fraction Price:  <span>£3795.00</span></Text>
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
                <Box className='btn_pagion'>
                    <Button className='btn_img' > 
                        <Image src='/img/Vector_img_left.svg' alt='' />
                    </Button>
                    <Button className='active'>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                     <span>...</span>
                    <Button>7</Button>
                    <Button className='btn_img_two'>
                        <Image src='/img/Vector_img_right.svg' alt='' />
                    </Button>
                </Box>
        </Box>
    </>
  )
}
