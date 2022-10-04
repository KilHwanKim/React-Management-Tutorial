import { Component } from 'react';
import './App.css';
import Customer from './componets/Customer';
const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name': '김길환',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any2',
  'name': '김길환2',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'

},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any3',
  'name': '김길환3',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'

}
]

class App extends Component {
  render(){
  return (
    <div>
    {
      customers.map(c=> {
        return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} genger={c.gender} job={c.job} />
        )


      })

    }
   </div>
    
  );  
  }
}

export default App;
