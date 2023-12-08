import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import './style.css';

// import poloImage from './polo.jpeg';
 


function App() {
 const[data, setData] = useState({});

  return (
    <div>
      <Form data={data} setData={setData} />
      <Table data={data}/>
      {/* <img src={poloImage} alt="" style={{width:'100%'}}/> */}
    </div>
  );
}

export default App;
