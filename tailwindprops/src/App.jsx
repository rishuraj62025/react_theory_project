
import './App.css';
import Card from './components/Card.jsx';
function App() {

 let myArr = [1,2,3,4,5];

 let myObj = {
    name: "Rishu Raj",
    age : 23
  }
  return (
    <div  className='flex flex-col items-center  gap-6'>
      <h1 className='bg-black text-white rounded-lg p-8 m-5 mb-6 text-center'>Tailwind css</h1>
      <Card Obj={myObj}/>
      <Card username="Tom" price="100"/>
      <Card username="Jerry" price="200"/>
    </div>
  )
}

export default App
