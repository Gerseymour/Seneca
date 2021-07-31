import { useContext, useEffect,useState } from 'react'
import '../App.css'
import data from '../data'
import AnswerContext from '../Context/answerContext'

interface IProp {
  id: number;
  options:string[]
}

const Options = (props:IProp) => {
  const [selected, setSelected] = useState('')
  const {changeAnswer, score} = useContext(AnswerContext)

  useEffect(()=> {
    randomPosition()
    
  },[] )

  useEffect(()=> {
    if (selected==='50%') {
      changeAnswer(props.id,props.options[1])
    } else {
      changeAnswer(props.id,props.options[0])
    } // eslint-disable-next-line
  }, [selected])

  function randomPosition() {
    const randomNumber = Math.floor(Math.random()*2)
    if (randomNumber===1) {
      setSelected('0%')
    } else {
    setSelected('50%')
    }
  }

  function changeSelected() {
    if (selected==='50%') {
      setSelected('0%')
      changeAnswer(props.id,props.options[0])
    } else {
      setSelected('50%')
      changeAnswer(props.id,props.options[1])
    }
  }

  const correctCheck = () => {
    if (data.answers.length === score) {
      return true
    }
    return false
  }



  return (
    <button className={`options-container ${correctCheck()?'disabled':''}`} onClick={()=>changeSelected()}>
      <div className='selecter' style={{left:`${selected}`}}/>
      <p className='options-one'>{props.options[0]}</p>
      <p className='options-two'>{props.options[1]}</p>
    </button>
  )
}

export default Options