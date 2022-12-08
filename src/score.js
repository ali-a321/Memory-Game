import React from "react";
import './App.css';
import CardArray from "./cardarray";


export default function Score(){
const [score,setScore] = React.useState(0)
const [highScore, setHighScore] = React.useState(0);
const [foodsClicked, setFoodsClicked] = React.useState([]);
const [checkWinner,setCheckWinner] = React.useState(false)


const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };
const handleHighScore = () => {
    setHighScore(score)
}
const handleFood = (foodName) => {
    setFoodsClicked((prevArr) => [...prevArr, foodName]);
  };

const reset = () => {
    setScore(0)
    setFoodsClicked([])
    setCheckWinner(false)
}

const gameLogic = (foodName) => {
    if(!foodsClicked.includes(foodName)){
        addScore()
        handleFood(foodName)
        check()
        }else {
            handleHighScore()
            reset()
        }
}
const check = () => {
    const btn = document.getElementById("checkLev")
    if (score>=11 && !btn.checked){
    setCheckWinner(true)
    } else if (score>=19 && btn.checked==true){
        setCheckWinner(true)
    }
}


    return (
        <div className='container'> 
            <div className='title'> Memory Game </div>
            <div className='scoreboard'> Score: {score}  HighScore: {highScore} </div>
            <div className="result"> {checkWinner? "You have Won! Great Memory!!": ""}  </div>
            
            <CardArray
            reset = {reset}
            gameLogic = {gameLogic}
            score = {score}
            highScore = {highScore}
            />
        </div>
    )
}