
import '../src/assest/css/App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './pages/home/HomePage';
import NFTs from './pages/nfts/NFTs';
import RolexUniquBloe from './pages/roledblue/RolexUniquBloe';

function App() {
  return (    
    <ChakraProvider>
      <BrowserRouter>
          <Routes>          
            <Route path="/" element={<HomePage />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/rolexuniqubloe" element={<RolexUniquBloe />} />
          </Routes>
        </BrowserRouter>
   </ChakraProvider>
    
  );
}

export default App;
