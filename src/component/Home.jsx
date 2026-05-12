import { useContext, useState } from "react";
import { GlobalContext } from "./globalContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { Result } = useContext(GlobalContext);
  const[hover,setHover]=useState(null);
  const cardObj = {
    width: "300px",
    height: "200px",
    // border: "3px solid blue",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px",
    boxShadow: "1px 1px 4px ",
    backgroundColor: "#f9f3fa",
    fontSize: "22px",
    textTransform:'capitalize',
  };
  const parentObj = {
    width: "100vw",
    // border: "4px solid red",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    padding: "8px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#f0f7f5',
  };


  return (
    <>
     <h1 style={{textAlign:'center',color:'#2c3e50'}}>All Posts</h1>
     <div style={parentObj}>
      {Result.map((obj) => {
        return (
          <div style={cardObj} key={obj.id}>
            <Link to={`/${obj.id}`} style={{textDecoration:hover===obj.id?"underline":'none',color:'black'}} onMouseEnter={()=>setHover(obj.id)} onMouseLeave={()=>setHover(null)}>{obj.title}  </Link>
          </div>
        );
      })}
    </div>
    </>
    
  );
}
