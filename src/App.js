import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Data from "./Components/Data";

export default function App(){
    
     const data=Data.map((n)=>  <Body {...n} />)

    return(
        <>
        <Header/>
        {data}
        </>
    )
}