import data from '../data'
import Option from '../components/optionsTwo'
import OptionThree from '../components/optionsThree'
import '../App.css'
import { useContext } from 'react'
import AnswerContext from '../Context/answerContext'



const Question = () => {
  const {score, question} = useContext(AnswerContext)

  const optionList = data[question].options.map((item) => {
    if (item.options.length === 3) {
      return <OptionThree options={item.options} id={item.id}/>
    }
    return <Option options={item.options} id={item.id} />
  })

  return (
    <div className='question-container'>
      <h1> {data[question]} </h1>
      {optionList}
      <h2>The answer is {score===data[question].answers.length?'correct':'incorrect'}</h2>
    </div>
  )
}

export default Question