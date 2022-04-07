
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

function SearchContainer(){

        return (
            <div>
                <SearchBar/>
                <SearchList/>
            </div>
        );
      
    
}

export default SearchContainer;