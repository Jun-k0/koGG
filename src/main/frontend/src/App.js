import React,{useState} from 'react';
import axios from "axios";
import History from "./History";

function App() {
  const [name,setName]=useState();
  const search=()=>{
    console.log({name});
    axios.post('/search', {
      SummonerName: {name}
      })
    .then(function (response) {
      console.log(response);
     })
    .catch(function (error) {
      console.log(error);
      });
    // 새로운 페이지 렌더링?
    <History
      name={name}
    />
  }
  const change=(e)=>{
    console.log(e.target.value);
    setName(e.target.value);
  }
  return (
    <div className="App">
      <header>koGG</header>
      <section>
        <input type="text" placeholder="아이디를 입력하세요." value={name} onChange={change}></input>
        <input type="button" value="검색!" onClick={search} ></input>
      </section>
    </div>
  );
}

export default App;
