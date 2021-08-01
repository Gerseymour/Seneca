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

const data:quiz[] = [
  {
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
  ]},
  {
    'id': 1,
    'question': 'United States of America States ',
    'answers':['California', 'Washington', 'Florida', 'New Mexico'],
    'options':[{
      'id':0, 
      'options':['San Francisco', 'California', 'LA']
    },{
      'id':1, 
      'options': ['Washington', 'Washington D.C']
    },{
      'id':2, 
      'options': ['Flo Rida', 'Miami', 'Florida']
    },{
      'id':3, 
      'options': ['New Mexico', 'Mexico']}
    ]},

]

export default data