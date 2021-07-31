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

  useEffect(()=> {
      calculateScore() // eslint-disable-next-line
  }, [answer]) 

  const changeAnswer = (id:number, option:string) => {
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
      if (answer[key]===data.answers[key])
      score++;
      console.log(score,'score')
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


  return (
    <AnswerContext.Provider value={{changeAnswer, score}}>
    <div className="App" style= {{background: `linear-gradient(180deg, ${background[0]} 0%, ${background[1]} 100%)`}}>
      <Question score={score}/>
    </div>
    </AnswerContext.Provider>
  );
}

export default App;
