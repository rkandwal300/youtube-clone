import React, { createContext, useEffect, useState } from "react";
import { dataApi } from "./utils/api";

export const Context = createContext();

export const AppContext = (props) =>{
    
    const [ loading , setLoading]= useState (true);
    const [searchResults , setSearchResults]= useState ([]);
    const [ selectCategories , setSelectCategories]= useState ('New');
    const [ mobileMenu , setMobileMenu]= useState (false);


useEffect(() => {
    fetchSelectedCategories( selectCategories) ;
}, [selectCategories])

const fetchSelectedCategories =(query) =>{
    setLoading(true);
    // dataApi().then((resp)=>
    dataApi(`search/?q=${query}`).then(({contents})=>
    {
        setSearchResults(contents)
        setLoading(false);
    }).catch((e)=>{
        console.log(' error = ',e)
    }) ;
}

  return (
    <Context.Provider   value={{
        loading , 
        setLoading,
        searchResults ,  
        selectCategories , 
        setSelectCategories , 
        mobileMenu ,
        setMobileMenu ,
        setSearchResults
    }}
    >
        {props.children}
    </Context.Provider>
  )
}
