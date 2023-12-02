import React, {useState} from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Link, Image, GridItem, Button, Checkbox} from '@chakra-ui/react'


export default function RolexBlueGold() {
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
     <Box className='rolexblu_prnt explyer_bg_box'>
      <Box className='rolexblu_iner_bl'>
          <Container maxW='1300px'>
            <Box className='border_box'>
              <SimpleGrid columns={12} columnGap={0} rowGap={0}>
                <GridItem colSpan={[12, 12, 12, 12, 5]}>
                  <Box className='blu_gold_grid_img'>
                    <Image src='/img/blu_gold_wo_img.png' className='blu_gold_wo_img' /> 
                  </Box>
                </GridItem>
                <GridItem colSpan={[12, 12, 12, 12, 7]} className='mar_grid_respns'>
                  <Box className='rolex_unique_box'>
                    <Box className='img_rol_box'>
                      <Image src='/img/rol_ri_ic.svg' className='blu_gold_wo_img' /> 
                      <Heading as='h1'>Rolex</Heading>
                    </Box>
                    <Box className='uni_box_btn_ic_box'>
                      <Heading as='h2'>Rolex Daytona  “Paul Newman”</Heading>
                      <Button><Image src='/img/uni_box_btn_ic.svg' className='blu_gold_wo_img' /> </Button>
                    </Box>  
                      <Box className='cstm_radio_min'>
                        <Box className='cstm_radio'>
                          <input type='radio' name='tollrens' />
                          <Heading as='h6' className='point_smn_won'>
                            Rolex
                          </Heading>
                        </Box>
                        <Box className='cstm_radio'>
                          <input type='radio' name='tollrens' />
                          <Heading as='h6' className='point_smn_won'>
                            Gold 
                          </Heading>
                        </Box>
                        <Box className='cstm_radio'>
                          <input type='radio' name='tollrens' />
                          <Heading as='h6' className='point_smn_won'>
                            BlueGold
                          </Heading>
                        </Box>
                      </Box>                                                 
                  </Box>    
                  <Box className='colectin_netwk_bx'>
                    <Box className='space_satt'>
                      <Text>Collection</Text>
                      <Box className='imlinbtn_bx'>
                        <Heading as='h5'>0x5572cca754b34707b1ea6dabf2683b4f5abcc1dd</Heading>
                        <Button><Image src='/img/bxs_copy.svg' className='bxs_copy' /></Button>
                      </Box>
                    </Box>
                    <Box className='space_satt'>
                      <Text>Network</Text>
                      <Heading as='h5'>BSC</Heading>
                    </Box>
                    <Box className='space_satt'>
                      <Text>Chain ID</Text>
                      <Heading as='h5'>56</Heading>
                    </Box>
                  </Box>       
                  <Heading as='h6'>Royalty</Heading>    
                  <Box className='colectin_netwk_bx'>
                    <Box className='space_satt'>
                      <Text>Collection</Text>
                      <Heading as='h5'>2,5%</Heading>
                    </Box>
                    <Box className='space_satt'>
                      <Text>Network</Text>
                      <Heading as='h5'>0x5572cca754b34707b1ea6dabf2683b4f5abcc1dd</Heading>
                    </Box>
                  </Box> 
                  <Box className='dyton_bom_min_bx'>
                    <Box className='rolex_min_box rolex_min_box_va'>
                      <Box className='qntt_box qntt_boxva'>
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
                      <Box className='pri_fution_bx'>
                        <Box className='pris_bx_rw'>
                          <Text>Price</Text>
                          <Heading as="h5">£250000</Heading>
                        </Box>
                        <Box className='pris_bx_rw'>
                          <Text>Price</Text>
                          <Heading as="h5">£250000</Heading>
                        </Box>
                        <Box className='pris_bx_rw'>
                          <Text>Price</Text>
                          <Heading as="h5">£250000</Heading>
                        </Box>
                      </Box>
                      <Box className='pri_fution_btn'>
                        <Button className='wallet_btn slid_btn raise Order_ds'>Order Now</Button>
                      </Box>
                    </Box>  
                  </Box>                  
                </GridItem>
              </SimpleGrid>
            </Box>              
          </Container>   
      </Box>
     </Box>
    </>
  )
}
