import React from 'react'
import LayoutTwo from '../../elements/LayoutTwo'
import ExploreNfts from './sections/ExploreNfts'
import MostRecentNfts from './sections/MostRecentNfts'

export default function NFTs() {
  return (
    <>
    <LayoutTwo>
      <MostRecentNfts />
      <ExploreNfts />
    </LayoutTwo>
    </>
  )
}
