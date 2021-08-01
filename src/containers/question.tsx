import data from '../data'
import Option from '../components/optionsTwo'
import OptionThree from '../components/optionsThree'
import '../App.css'

interface IProp {
  score: number
}

const Question = (props:IProp) => {


  const optionList = data.options.map((item) => {
    if (item.options.length === 3) {
      return <OptionThree options={item.options} id={item.id}/>
    }
    return <Option options={item.options} id={item.id} />
  })

  return (
    <div className='question-container'>
      <h1> {data.question} </h1>
      {optionList}
      <h2>The answer is {props.score===data.answers.length?'correct':'incorrect'}</h2>
    </div>
  )
}

export default Question