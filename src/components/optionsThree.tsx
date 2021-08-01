import { useContext, useEffect,useState } from 'react'
import '../App.css'
import data from '../data'
import AnswerContext from '../Context/answerContext'

interface IProp {
  id: number;
  options:string[]
}

const OptionsThree = (props:IProp) => {
  const [selected, setSelected] = useState('')
  const {changeAnswer, score} = useContext(AnswerContext)

  useEffect(()=> {
    randomPosition()
    
  },[] )

  useEffect(()=> {
    if (selected==='selecterthree-optionone') {
      changeAnswer(props.id,props.options[0])
    } else if (selected==='selecterthree-optiontwo') {
      changeAnswer(props.id,props.options[1])
    }else {
      changeAnswer(props.id,props.options[2])
    } // eslint-disable-next-line
  }, [selected])

  function randomPosition() {
    const randomNumber = Math.floor(Math.random()*3)
    if (randomNumber===1) {
      setSelected('selecterthree-optionone')
    } else if (randomNumber === 2) {
    setSelected('selecterthree-optiontwo')
    } else {
    setSelected('selecterthree-optionthree')
    }
  }

  function changeSelected(className: string, optionAnswer:number) {
    console.log(className, props.options[optionAnswer])  
    setSelected(className)
  }

  const correctCheck = () => {
    if (data.answers.length === score) {
      return true
    }
    return false
  }



  return (
    <div className={`options-container`}>
      <div className={`selecterthree ${selected}`} />
      <button className={`options-one ${correctCheck()?'disabled':''}`} onClick={()=>changeSelected('selecterthree-optionone', 0)}><p>{props.options[0]}</p></button>
      <button className={`options-two ${correctCheck()?'disabled':''}`} onClick={()=>changeSelected('selecterthree-optiontwo', 1)}><p>{props.options[1]}</p></button>
      <button className={`options-three ${correctCheck()?'disabled':''}`} onClick={()=>changeSelected('selecterthree-optionthree', 2)}><p>{props.options[2]}</p></button>
    </div>
  )
}

export default OptionsThree