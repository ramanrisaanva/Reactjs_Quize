import {React,useState} from 'react'
import { Link} from "react-router-dom";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

function InfoCollecter() {
const history = useHistory();
    const [inValue,setInValue] = useState("")
    const handleChange=(e)=>{
       setInValue( e.target.value)
    }

   const  handleNameData=(value)=>{
     const name = localStorage.getItem("name");
       if(inValue !== name)
       { localStorage.setItem("name",inValue);
        console.log(localStorage.getItem("name"));}else{
            console.log("name is same")
        }
        history.push("/PlayArea")
    }
    return (
        <ContentContainer>
               <InputBox className="inputBox"
               placeholder="Enter The Name"
               value={inValue}
               onChange={handleChange}
               />
          <StyledWrapper>   <SubmitButton  onClick={()=>handleNameData(inValue)}>Submit</SubmitButton></StyledWrapper>
        </ContentContainer>
    )
}

export default InfoCollecter

const ContentContainer = styled.div`
display:flex;
flex-direction:column;
 align-items: center;
  justify-content:center;
`;
const InputBox = styled.input`
margin:50px;
margin-top:60px;
border:2px solid #14279B;
border-radius:5px;
height:5vh;
text-align:center;
`;


const SubmitButton = styled.div`
text-decoration:none;
border: 2px solid #3D56B2;
background-color:#3D56B2;
border-radius:8px;
color:#E6E6E6;
cursor:pointer;
padding:5px 30px;

`;
const StyledWrapper = styled.div`
&:hover ${SubmitButton}{
box-shadow: -2px 1px 15px -1px rgba(0,0,0,0.47);
-webkit-box-shadow: -2px 1px 15px -1px rgba(0,0,0,0.47);
-moz-box-shadow: -2px 1px 15px -1px rgba(0,0,0,0.47);
}
`;
