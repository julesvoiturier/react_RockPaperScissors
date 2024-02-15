import { useState } from 'react'
import './App.css'
import Rock from './components/Rock'
import Paper from './components/Paper'
import Scissors from './components/Scissors'
import TopBar from './components/TopBar'
import RulesButton from './components/RulesButton'

//! IMAGES IMPORTS:
import RockIcon from './assets/images/icon-rock.svg'
import PaperIcon from './assets/images/icon-paper.svg'
import ScissorsIcon from './assets/images/icon-scissors.svg'
import BgTriangle from './assets/images/bg-triangle.svg'
import Title from './assets/images/logo.svg'
import YouWin from './components/YouWin'



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


  //! RESTART FUNCTION
  let restart =()=> {
    setChoice("")
    setHouseChoice("")
    setUnclickable(false)
    setHouseDisplay(false)
    setDisplayMiddle(false)
    setResult("")
  }

  //! CHOOSING FUNCTION
  let choiceFunction = (x) => {

    setChoice(x)
    console.log(choice);
    setUnclickable(true)
    setHouseDisplay(true)
    setTimeout(() => {
      setDisplayMiddle(true)

    }, 2000);

    let randomizer = Math.floor(Math.random() *  3)
    switch (randomizer) {
      case 0:
        setHouseChoice(choices[0])
        break;
      case 1:
        setHouseChoice(choices[1])
        break;
      case 2:
        setHouseChoice(choices[2])
        break;
    }

    if (choice == "paper") {
      fight1()
    } else if (choice == "rock") {
      fight2()
    } else if (choice == "scissors") {
      fight3()
    }
  }

  //! FIGHT FUNCTION
  let fight1 = () => {
    if (houseChoice == "scissors") {
      setPoints(-1)
      setResult("You Loose")
    } else if (houseChoice == "rock") {
      setPoints(+1)
      setResult("You Win")
    } else {
      setResult("draw")
    }
  }
  let fight2 = () => {
    if (houseChoice == "paper") {
      setPoints(-1)
      setResult("You Loose")
    } else if (houseChoice == "scissors") {
      setPoints(+1)
      setResult("You Win")
    } else {
      setResult("draw")
    }
  }
  let fight3 = () => {
    if (houseChoice == "rock") {
      setPoints(-1)
      setResult("You Loose")
    } else if (houseChoice == "paper") {
      setPoints(+1)
      setResult("You Win")
    } else {
      setResult("draw")
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

        <RulesButton/>
  
      </div>
    </div>
  )
}

export default App
