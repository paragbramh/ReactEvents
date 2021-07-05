import React, { useState } from 'react';

const App =()=>{
  const purple = '#8e44ad';
  const [bg,setBg] = useState(purple);
  const [Name,setName] =useState('Do not Dare');


  const bgChange=()=>{
    let newBg = '#34495e';
    let NewName = 'hey , you im-patient';
    setName(NewName)
    setBg(newBg);
  }

  const bgBack=()=>{
    setBg(purple);
    setName("good, do not disturb this !");
  }


  return (

      <>
          <div style={ {backgroundColor:bg} }>
            <button onClick={bgChange} onDoubleClick={bgBack}>{Name}</button>
          </div>

      </>

);


}

export default App;