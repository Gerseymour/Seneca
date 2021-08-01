import {useState, useEffect} from 'react';
import AnswerContext from './Context/answerContext'
import Question from './containers/question'
import data from './data'
import './App.css';


interface IAnswer{
  [key:number]:string;
}


function App() {
  const [background, setBackground] = useState(['#000','#FFF'])
  const [answer, setAnswer] = useState<IAnswer>({})
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState(0)

  useEffect(()=> {
      calculateScore() // eslint-disable-next-line
  }, [answer]) 

  const changeAnswer = (id:number, option:string) => {
    console.log(id, option, 'context function')
    const input:IAnswer = {}
    input[id]= option
    setAnswer((prev) => {
      return {...prev, ...input}
    })
  }

  const calculateScore = () => {
    let score = 0
    for(let key in answer){
      if(key=== undefined) return
      if (answer[key]===data[question].answers[key])
      score++;
    }
    setScore(score)
  }



  const colorMap = [
    ['#ff0707', '#d56315'],
    ['#F6B868','#EE6B2D'],
    ['#f9e34b','#15d5a1'],
    ['#76E0C2','#59CADA'],
    ['#59CADA','#534bf9']
  ]

  useEffect(() => {

    setBackground(colorMap[(score)]) // eslint-disable-next-line
  }, [score])

  const changeQuestion = (change:string) => {
    if (change==='+') {
      setQuestion((prev)=> prev+1)
    }
    if (change==='-') {
      setQuestion((prev)=> prev-1)
    }
  }
  const pageCheck = (nav:string) => {
    if (nav==='+') {
      if (question === data.length-1) {
        return true
      }
    }
    if (nav==='-') {
      if (question === 0) {
        return true
      }
    }
    return false
  }

  


  return (
    <AnswerContext.Provider value={{changeAnswer, score, question}}>
    <div className="App" style= {{background: `linear-gradient(180deg, ${background[0]} 0%, ${background[1]} 100%)`}}>
      <button className={`nav-button ${pageCheck('-')?'disabled':''}`} style={{color:`${background[0]}`}} onClick={()=>changeQuestion('-')}>Previous</button>
      <Question />
      <button className={`nav-button ${pageCheck('+')?'disabled':''}`} style={{color:`${background[0]}`}} onClick={()=>changeQuestion('+')}>Next</button>
    </div>
    </AnswerContext.Provider>
  );
}

export default App;
