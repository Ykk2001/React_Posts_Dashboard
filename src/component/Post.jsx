import { useContext } from "react";
import { GlobalContext } from "./globalContext";
import { useParams } from "react-router-dom";

export default function Post() {
  const { Result } = useContext(GlobalContext);
  const { id } = useParams();
  const filterObj = Result.find((obj) => Number(obj.id) == Number(id));


  console.log("FilterObj", filterObj);

  const ContainerStyle = {
    minHeight:'100vh',
    display:'flex',
    // flexWrap:"wrap",//
    justifyContent:'center',
    flexDirection:'column',
    gap:"40px",
    alignItems:'center',
    backgroundColor:'#f0f7f5',
    padding: "20px",
  };

  const parentStyle = {
    maxWidth: "600px",
    display: "flex",
    flexWrap:'wrap',
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    padding:'30px',
    backgroundColor: "#f9f3fa",
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
  };

  const titleStyle = {
    borderBottom: "1px solid orange",
    paddingBottom:'10px',
    fontSize:'32px',
    textTransform:'capitalize',
    
  };

  const bodyStyle = {
    // border: "1px solid red",
    margin: "2px",
    fontSize:'20px',
    lineHeight:'1.5'
  };

  return (
    <div style={ContainerStyle}>
      <h1 style={{color:'#2c3e50'}}>Post Details</h1>
      <div style={parentStyle}>
        <h2 style={titleStyle}>{filterObj?.title}</h2>
        <p style={bodyStyle}>{filterObj?.body}</p>
      </div>
    </div>
  );
}
