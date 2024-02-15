import { useState, useEffect } from 'react'
import './App.css'
import Rock from './components/Rock'
import Paper from './components/Paper'
import Scissors from './components/Scissors'
import TopBar from './components/TopBar'
import RulesButton from './components/RulesButton'
import YouWin from './components/YouWin'

//! IMAGES IMPORTS:
import RockIcon from './assets/images/icon-rock.svg'
import PaperIcon from './assets/images/icon-paper.svg'
import ScissorsIcon from './assets/images/icon-scissors.svg'
import BgTriangle from './assets/images/bg-triangle.svg'
import Title from './assets/images/logo.svg'
import Modal from './assets/images/image-rules.svg'
import Close from './assets/images/icon-close.svg'



//! APP JSX
function App() {

  let choices = ["rock", "paper", "scissors"]
  const [choice, setChoice] = useState("")
  const [houseChoice, setHouseChoice] = useState("")
  const [unclickable, setUnclickable] = useState(false)
  const [points, setPoints] = useState(0)
  const [houseDisplay, setHouseDisplay] = useState(false)
  const [displayMiddle, setDisplayMiddle] = useState(false)
  const [result, setResult] = useState("")



  //! NEW ROUND FUNCTION
  let restart =(x)=> {
    setChoice("")
    setHouseChoice("")
    setUnclickable(false)
    setHouseDisplay(false)
    setDisplayMiddle(false)
    setResult("")
    if (x == "newGame") {
      setPoints(0)
      alert("YOU WON THE GAME")
    }
  }

  //! CHOOSING FUNCTION
  let choiceFunction = (x) => {

    setChoice(x)
    console.log(choice);
    setUnclickable(true)
    setHouseDisplay(true)

    let randomizer = Math.floor(Math.random() *  3)
    let otherChoice = choices[randomizer]
    setHouseChoice(choices[randomizer])

    setTimeout(() => {
      setDisplayMiddle(true)

      if (x == "paper") {
        fight1(otherChoice)
      } else if (x == "rock") {
        fight2(otherChoice)
      } else if (x == "scissors") {
        fight3(otherChoice)
      }

    }, 1000);
  }

  //! FIGHT FUNCTION
  let fight1 = (x) => {
    if (x == "scissors") {
      setPoints(points -1)
      console.log(points);
      setResult("YOU LOOSE")
      if (points < 1) {
        setPoints(0)
      }
    } else if (x == "rock") {
      setPoints(points +1)
      console.log(points);
      setResult("YOU WIN")
      if (points == 2) {
        restart("newGame")
      }
    } else if (x == "paper"){
      setResult("DRAW")
    }
  }
  let fight2 = (x) => {
    if (x == "paper") {
      setPoints(points -1)
      setResult("YOU LOOSE")
      if (points < 1) {
        setPoints(0)
      }
    } else if (x == "scissors") {
      setPoints(points +1)
      setResult("YOU WIN")
      if (points == 2) {
        restart("newGame")
      }
    } else {
      setResult("DRAW")
    }
  }
  let fight3 = (x) => {
    if (x == "rock") {
      setPoints(points-1)
      setResult("YOU LOOSE")
      if (points < 1) {
        setPoints(0)
      }
    } else if (x == "paper") {
      setPoints(points +1)
      setResult("YOU WIN")
      if (points == 2) {
        restart("newGame")
      }
    } else {
      setResult("DRAW")
    }
  }
  //! APP JSX RETURN
  return (
    <div className='w-screen h-screen bg-[#1f3756]'>
      <div className='w-full h-full flex items-center justify-start flex-col p-12'>

        <TopBar points={points} Title={Title}/>

        {
          choice == "" ? 
          <div className='iconContainer w-[80%] h-[700px] mt-[80px]'>
            <Rock setChoice={setChoice} RockIcon={RockIcon} choiceFunction={choiceFunction}  unclickable={unclickable} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/> 
            <Paper setChoice={setChoice} PaperIcon={PaperIcon} choiceFunction={choiceFunction}  unclickable={unclickable} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/>
            <Scissors setChoice={setChoice} ScissorsIcon={ScissorsIcon} choiceFunction={choiceFunction}  unclickable={unclickable} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/>
            <img className='bgTriangle' src={BgTriangle} alt="" />
          </div> 
          : 
          <div className='iconContainer w-[80%] h-[700px] mt-[80px]'>
              {displayMiddle == true ? <YouWin result={result} Restart={restart}/> : ""}
              {choice == "paper" ? <Paper PaperIcon={PaperIcon} choiceFunction={choiceFunction} choice={choice} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/> : ""}
              {choice == "scissors" ? <Scissors ScissorsIcon={ScissorsIcon} choiceFunction={choiceFunction} choice={choice} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/> : ""}
              {choice == "rock" ? <Rock RockIcon={RockIcon} choiceFunction={choiceFunction} choice={choice} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/>  : ""}
              {houseChoice == "paper" ? <Paper PaperIcon={PaperIcon} choiceFunction={choiceFunction} unclickable={unclickable} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/> : ""}
              {houseChoice == "scissors" ? <Scissors ScissorsIcon={ScissorsIcon} choiceFunction={choiceFunction} unclickable={unclickable} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/> : ""}
              {houseChoice == "rock" ? <Rock RockIcon={RockIcon} choiceFunction={choiceFunction} unclickable={unclickable} houseDisplay={houseDisplay} displayMiddle={displayMiddle}/>  : ""}
          </div>
        }

        <RulesButton Modal={Modal} Close={Close}/>
  
      </div>
    </div>
  )
}

export default App
