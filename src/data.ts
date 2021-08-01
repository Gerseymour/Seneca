interface  quiz {
  id: number;
  question:string;
  answers:string[];
  options:options[]
}
interface options {
  id:number;
  options:string[]
}

const data:quiz = {
  'id': 1,
  'question': 'European Capitals',
  'answers':['London', 'Paris', 'Rome', 'Madrid'],
  'options':[{
    'id':0, 
    'options':['Lunden','London', 'Libdon']
  },{
    'id':1, 
    'options': ['Paris', 'Payris']
  },{
    'id':2, 
    'options': ['Roam', 'Rome', 'Rone']
  },{
    'id':3, 
    'options': ['Madrid', 'Mabrib']}
  ] 
}

export default data