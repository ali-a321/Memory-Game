import React from 'react';
import './App.css';
import IndividualCard from './individualcard';
import boba from './images/boba.jpg';
import chicken from './images/chicken-rice.png';
import crawfish from './images/crawfish.png';
import curry from './images/curry.jpg';
import dim from './images/dimsum.jpg';
import hotpot from './images/hotpot.jpg';
import matcha from './images/matcha.jpg';
import ramen from './images/ramen.jpg';
import steak from './images/steak.png';
import sushi from './images/sushi.png';
import tak from './images/takoyaki.jpg';
import zong from './images/zongzi.jpg';
import bb8 from './images/bb8.png';
import c3po from './images/c3po.png';
import chew from './images/chewbacca.png';
import finn from './images/finn.png';
import leia from './images/leia.png';
import obi from './images/obiwan.png';
import r2d2 from './images/r2d2.png';
import ren from './images/ren.png';
import storm from './images/stormtrooper.png';


export default function CardArray(props) {
  const {gameLogic ,score, highScore,reset} = props;

  function hardMode(){
      let hardArr =
    [
   
    {
      src: zong,
      title: 'Zongzi',

    },
    {
      src: dim,
      title: 'Dimsum',

    },
    {
      src: ramen,
      title: 'Ramen',
 
    },
    {
      src: crawfish,
      title: 'Crawfish',
 
    },
    {
      src: chicken,
      title: 'Chicken Rice',
  
    },
    {
      src: matcha,
      title: 'Matcha Drink',
   
    },
    {
      src: curry,
      title: 'Curry',

    },
    {
      src: hotpot,
      title: 'Hotpot',
     
    },
    {
      src: bb8,
      title: 'BB-8',
 
    },
    {
      src: c3po,
      title: 'C3PO',
 
    },
    {
      src: chew,
      title: 'Chewbacca',

    },
    {
      src: finn,
      title: 'Finn',
  
    },
    {
      src: tak,
      title: 'Takoyaki',
    },
    {
      src: boba,
      title: 'Boba',
    
    },
    {
      src: steak,
      title: 'Steak',
      
    },
    {
      src: leia,
      title: 'Leia',
   
    },
    {
      src: obi,
      title: 'ObiWan',

    },
    {
      src: r2d2,
      title: 'R2D2',
     
    },
    {
      src: ren,
      title: 'Ren',

    },
    {
      src: storm,
      title: 'Stormtrooper',
     
    },
      ]
      const btn = document.getElementById("checkLev")
      const display = document.getElementById("level")
      if (btn.checked== true){
          display.textContent= "Good Luck Boss, you're going to need it"
          reset()
          SetFoods(hardArr)

      }
      else {
          display.textContent = "Up the Difficulty?"
          reset()
          SetFoods(generateArr())
      }
    }

  function generateArr(){
    let picArr =
        [
        {
          src: tak,
          title: 'Takoyaki',
        },
        {
          src: boba,
          title: 'Boba',
        
        },
        {
          src: steak,
          title: 'Steak',
          
        },
        {
          src: zong,
          title: 'Zongzi',

        },
        {
          src: dim,
          title: 'Dimsum',

        },
        {
          src: ramen,
          title: 'Ramen',
    
        },
        {
          src: crawfish,
          title: 'Crawfish',
    
        },
        {
          src: sushi,
          title: 'Sushi',

        },
        {
          src: chicken,
          title: 'Chicken Rice',
      
        },
        {
          src: matcha,
          title: 'Matcha Drink',
      
        },
        {
          src: curry,
          title: 'Curry',

        },
        {
          src: hotpot,
          title: 'Hotpot',
        
        },
      ]
      return picArr
    }
  const [foods,SetFoods] = React.useState(generateArr())

  const changeOrder = (newFoods) => {
    for (let i = newFoods.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newFoods[i], newFoods[j]] = [newFoods[j], newFoods[i]];
    }
  }

  React.useEffect(() => {
      const newFoods = [...foods];
      changeOrder(newFoods);
      SetFoods(newFoods);

    }, [score, highScore]);

  const final =  foods.map(item => <IndividualCard item={item.src} title = {item.title} 
                          gameLogic={gameLogic} key={item.title} />)

                        
  return (
      <div> 
        <div className='difficultyContainer'>
          <div className="level" id="level">Up The Difficulty?  </div>
          <div className='box'> <input type="checkbox" id="checkLev" name="checkLev" onClick={hardMode} ></input></div>      
        </div>
        <div className="foodContainer">
          {final} 
        </div>
      </div>
    );
  }

