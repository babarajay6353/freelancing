import React from 'react'
import Layout from '../../elements/Layout'
import Faq from './section/Faq'
import HowItWork from './section/HowItWork'
import LatestNfts from './section/LatestNfts'
import LimitedEdition from './section/LimitedEdition'
import LuxWatches from './section/LuxWatches'
import OwnPeice from './section/OwnPeice'
import TheGears from './section/TheGears '
import SliOftime from './SliOftime'

export default function HomePage() {
  return (
    <>
    <Layout>
      <LuxWatches />
      <OwnPeice />
      <LimitedEdition />
      <LatestNfts />
      <TheGears />
      <SliOftime />
      <HowItWork />
      <Faq />
    </Layout>
    </>
  )
}
