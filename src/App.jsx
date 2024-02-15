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

function App() {



  let choices = ["rock", "paper", "scissors"]
  const [choice, setChoice] = useState("")
  const [unchosenList, setUnchosenList] = useState(null)
  const [houseChoice, setHouseChoice] = useState("")
  const [unclickable, setUnclickable] = useState(false)


  //! CHOOSING FUNCTION

  let choiceFunction = (x) => {

    setUnclickable(true)
    setChoice(x)
    let unchosen = []

    choices.map((element)=> {
      if (x != element) {
        unchosen.push(element)
      }
    })

    setUnchosenList(unchosen)

    let randomizer = Math.floor(Math.random() *  2)
    randomizer == 0 ? setHouseChoice(unchosenList[0]) : setHouseChoice(unchosenList[1])
    console.log(houseChoice);

  }




  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-full flex items-center flex-col p-12'>

        <TopBar/>

        {
          choice == "" ? 
          <div className='iconContainer w-[40%] h-[700px] mt-12'>
            <Rock RockIcon={RockIcon} choiceFunction={choiceFunction}/> 
            <Paper PaperIcon={PaperIcon} choiceFunction={choiceFunction}/>
            <Scissors ScissorsIcon={ScissorsIcon} choiceFunction={choiceFunction}/>
            <img className='bgTriangle' src={BgTriangle} alt="" />
          </div> 
          : 
          <div className='iconContainer w-[40%] h-[700px] mt-12'>
              {choice == "paper" ? <Paper PaperIcon={PaperIcon} choiceFunction={choiceFunction} unclickable={unclickable}/> : ""}
              {choice == "scissors" ? <Scissors ScissorsIcon={ScissorsIcon} choiceFunction={choiceFunction} unclickable={unclickable}/> : ""}
              {choice == "rock" ? <Rock RockIcon={RockIcon} choiceFunction={choiceFunction} unclickable={unclickable}/>  : ""}
              {houseChoice == "paper" ? <Paper PaperIcon={PaperIcon} choiceFunction={choiceFunction} unclickable={unclickable}/> : ""}
              {houseChoice == "scissors" ? <Scissors ScissorsIcon={ScissorsIcon} choiceFunction={choiceFunction} unclickable={unclickable}/> : ""}
              {houseChoice == "rock" ? <Rock RockIcon={RockIcon} choiceFunction={choiceFunction} unclickable={unclickable}/>  : ""}
          </div>
        }


        <RulesButton/>
  
      </div>
    </div>
  )
}

export default App
