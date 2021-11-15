import {useState} from 'react'
function ClickCounter() {
  const [clicked, setClicked] = useState(0);
  function handleClick(){    
    setClicked(clicked+1);
  }
  return (
    <section className="section-lightgray">
      <h1>Number of times button was clicked:</h1>
      <h1>{clicked}</h1>
      <button onClick ={handleClick}>Click me</button>
    </section>
  )
}

export default ClickCounter