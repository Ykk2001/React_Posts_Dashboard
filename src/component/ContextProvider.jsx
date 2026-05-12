import { useEffect, useState } from "react";
import { GlobalContext } from "./globalContext";


export default function ContextProvider({children}) {
    const [Result,SetResult]=useState([]);

    useEffect(()=>{
     async function FetchData()
     {
      const response=await fetch('https://jsonplaceholder.typicode.com/posts');
      const data=await response.json();
      SetResult(data)

     }
     FetchData();
    },[])

  return (
    <GlobalContext.Provider value={{Result}}>
      {children}
    </GlobalContext.Provider>
  )
}
