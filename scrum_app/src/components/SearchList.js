
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import { FixedSizeList } from 'react-window';


function SearchList(){

  const Row = ({ index, style }) => (
    <div style={style}>
       {/* define the row component using items[index] */}
       l
    </div>
  );
  

  return(
    
      <FixedSizeList
      height={400}
      width={360}
      itemSize={46}
      itemCount={200}
      overscanCount={5}
    >
      {Row}
    </FixedSizeList>
  );


    
}

export default SearchList;