import {useState} from 'react'
function Bulb(props) {
  const [switchedOn, setSwitchedOn] = useState(true)
  return (
    <div>
      <img
        alt="light-bulb"
        src="./bulb.png"
        className="bulb"
        style={{ background: switchedOn ?`radial-gradient(${props.color}, #282c34)`:"none" }}
      />
      <button onClick={() =>{
        !switchedOn? setSwitchedOn(true):setSwitchedOn(false);
      }}>{switchedOn?"turn the lights off":"flip the switch"}</button>
    </div>
  )
}

export default Bulb