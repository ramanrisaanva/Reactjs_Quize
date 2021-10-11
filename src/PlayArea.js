import {React,useState}from 'react'
import {data as Data} from './Data';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PlayArea() {
  const name = localStorage.getItem("name");
    const [quesNumber,setQuesNumber] = useState(0);
    const [isClickable ,setIsClickable] = useState(true);
    const [score,setScore] = useState(0);
    const increaseNumber =()=>{
    console.log("Button Clicked")
    if(quesNumber <4){
        console.log(quesNumber);
        setQuesNumber(quesNumber+1);
        setIsClickable(true);
    }
   }
    const checker=(value)=>{
     setIsClickable(false);
     console.log(value);
     if(value){
      setScore(score+20);
   }else{
      console.log("flase")
   }
     return value?toast("Right Answer",{type:"success"}):toast("Wrong Answer",{type:"warning"});
   
    }
  
    return (
        <QuizeContainer>
          <ScoreBox>{name+"'s"} Score:- {"  "+score} %</ScoreBox>
             <QuestionContainer>
                <QuestionTitle> Q:-</QuestionTitle> {Data[quesNumber].question}
             </QuestionContainer>
             <OpationContainer>  
              {Data[quesNumber].answerQuestion.map((answerQuestion)=>(
                <OpationTitleWarraper> <OpationTitle onClick={()=>isClickable?checker(answerQuestion.isCorrect):null} >
                      {answerQuestion.answerText}
                  </OpationTitle></OpationTitleWarraper>
              ))}
             </OpationContainer>
           <ButtonWrapper>  <Nextbutton onClick={increaseNumber}>Next Question </Nextbutton></ButtonWrapper>
           <ToastContainer autoClose={1990}  position="bottom-center"/>
        </QuizeContainer>
    )
}

export default PlayArea

const QuizeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const QuestionContainer = styled.div`
margin:50px;
border:3px solid #3D56B2;
padding:10px;
border-radius:10px;
width:30%;
@media (max-width: 768px) { 
    width:80%;
  }
`;
const QuestionTitle = styled.span`
 font-weight:900;
 margin:0 5px;
 color: #3D56B2;

`;

const OpationContainer = styled.div`
width:40%;
display: flex;
flex-direction:row;
flex-wrap: wrap;
color:black;
justify-content:center;
align-items:center;
@media (max-width: 768px) { 
    display: flex;
flex-direction:row; 
flex-wrap: wrap;
  }
`;
const OpationTitle = styled.div`
text-align:center;
margin:10px;
 border: 2px solid #3D56B2;
 padding: 10px 25px;
 padding-top:20px;
 border-radius:10px;
width:120px;
height:5vh;
@media (max-width: 768px) { 
    padding-top:20px;
    padding-bottom:5px;
  }
`;
const OpationTitleWarraper = styled.div`
&:active ${OpationTitle}{
    text-align:center;
margin:10px;
 border: 5px solid #3D56B2;
 padding: 10px 25px;
 padding-top:20px;
 border-radius:10px;
width:120px;
height:5vh;
@media (max-width: 768px) { 
    padding-top:20px;
    padding-bottom:5px;
  }
}
`;

const Nextbutton = styled.button`
text-decoration:none;
border: 2px solid #3D56B2;
background-color:#3D56B2;
border-radius:8px;
color:#E6E6E6;
cursor:pointer;
padding:5px 30px;
margin:10px;
`;
const ButtonWrapper = styled.div`
&:hover ${Nextbutton}{
box-shadow: -2px 1px 15px -1px rgba(0,0,0,0.47);
-webkit-box-shadow: -2px 1px 15px -1px rgba(0,0,0,0.47);
-moz-box-shadow: -2px 1px 15px -1px rgba(0,0,0,0.47);
}
`;


const ScoreBox = styled.div`
  margin-top:10px;
  background-color:#3D56B2;
  color:#E6E6E6;
  padding:10px;
  border-radius:5px;
`;