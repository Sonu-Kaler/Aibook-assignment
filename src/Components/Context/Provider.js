import React,{useState} from "react";
import Context from "./Context";
const Provider=(props)=>{
    const [theme,setTheme] = useState({
        color:"#a4b5fc",
        backgroundColor:"#1e283a"
      })
      return(
          <Context.Provider value={{
            theme:theme,
            ligthTheme:()=>setTheme({
              color:"white",
              backgroundColor:"#1e283a"
            }),
            darkTheme:()=>setTheme({
              color:"white",
              backgroundColor:"#0e1629"
            })
          }}>
            {props.children}
          </Context.Provider>
      )
}
export default Provider;