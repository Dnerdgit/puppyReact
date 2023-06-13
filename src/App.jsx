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

        {featPupId && (
        <div class="pupFeature">

          <h2>{featuredPup.name}</h2>
          <div>
            <img src={featuredPup.imageUrl}/>
          </div>
          <br></br>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
 

    
  )
}

export default App
0