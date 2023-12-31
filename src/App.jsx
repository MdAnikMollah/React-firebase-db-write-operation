import { useState } from 'react'
import { getDatabase, ref, set, push, onValue } from "firebase/database";

function App() {
  const db = getDatabase();
 let [text,setText] = useState("")
 let handleForm = (e)=>{
  setText(e.target.value);
 }
 // Write operation
 let handleAdd = ()=>{
  //console.log(text);
  set(push(ref(db,"allfirebase-db")),{
    firebase:text,
  })
 }

 // Read operation
 const starCountRef = ref(db, 'allfirebase-db');
  onValue(starCountRef, (snapshot) => {
   let arr = []
   snapshot.forEach((item) =>(
    arr.push(item.val())
   ))
   console.log(arr);
  });


  return (
    <>
    <div>
    <input onChange={handleForm} placeholder='enter your text' />
    <button onClick={handleAdd} >Add</button>

    </div>
    <ul>
      <li>Nibbir jamai</li>
      <li>Vatija</li>
      <li>Dorbesh</li>
    </ul>
    </>
  )
}

export default App
