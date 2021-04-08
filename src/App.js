import './App.css';
import { useState, useEffect, useRef } from 'react'
import Timer from './Timer'
import Video from './Video.mp4'

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


  const ref = useRef([]);
  const addToRef = el => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }

  }
  useEffect(() => {
 
  }, []);

  return (
    <div className="App">
      <h1> Billy was Here</h1>
      <button onClick={toggleFunc}> Set Timer</button>
      <h2>{toggle && <Timer />}</h2>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4' />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4' />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4' />
      </video>
      {dataImg && <img src={dataImg}
        alt="cat img"
        style={{ width: "500px" }}
      />}
    </div>
  );
}
export default App;
