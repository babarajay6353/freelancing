import React from 'react';

import Footer from './Footer';
import HeaderTwo from './HeaderTwo';


const LayoutTwo = (props) => {
    return (
    <div className={props.className}>
      <HeaderTwo />
        {props.children}
      <Footer />
    </div>
  );  
};

export default LayoutTwo;
