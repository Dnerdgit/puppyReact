import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log(puppies);
  //onClick={()=>{console.log("puppy id: ", puppy.id)}}
  
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup);

  return (
    
      <div className="App">
       
        {
          puppies.map((puppy) => {
            return <p onClick={()=> { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
          })
        }
        <p>{featPupId}</p>
      </div>
 

    
  )
}

export default App
0