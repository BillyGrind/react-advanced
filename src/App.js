import './App.css';
import { useState, useEffect } from 'react'
import Timer from './Timer'

function App() {

  const [toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle)
  }



  const [dataImg, setDataImg] = useState();
  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setDataImg(data[0].url)
      })

  }, [])

  return (
    <div className="App">
      <h1> Billy was Here</h1>
      <button onClick={toggleFunc}> Set Timer</button>
      <h2>{toggle &&<Timer /> }</h2>

      {dataImg && <img src={dataImg}
        alt="cat img"
        style={{ width: "500px" }}
      />}
    </div>
  );
}
export default App;
