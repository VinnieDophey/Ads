import "./App.css";
import workData from "./workData";
import React, { useState } from 'react';
function App() {
  console.log(workData);
  const [initialVal, setInitialVal] = useState(0)
  let move;
  function handleClick(side) {
    if(side === "right") {
      setInitialVal(
        initialVal > 0 ? initialVal - 1 : workData.length - 1
      )
    } else {
      setInitialVal(initialVal < workData.length- 1 ? initialVal + 1 :0)

    }
  }

  console.log(initialVal)


  return (
    
    <div className="work">
      <div className="slider" style={{ 
        transform: `translateX(${initialVal * 100}vw)`

      }}>
        {workData.map((data) => (
          <div key={data.id} className="container">
            <div className="item">
              <div className="left">
                <h1 className="title">{data.title}</h1>
                <h4 className="desc">{data.desc}</h4>
              </div>
              <div className="right">
                <img src={data.img} alt="img" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="leftArrow arrow" onClick={() => handleClick("left")}> ◀ </div>
      
      <div className="rightArrow arrow"onClick={() => handleClick("right")}> ▶ </div>
    </div>
  );
}

export default App;