import React,{useState} from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [name,setName]=useState();

  const change=(e)=>{
    console.log(e.target.value);
    setName(e.target.value);
  }
  return (
    <div className="App">
      <header>koGG</header>
      <section>
        <input type="text" placeholder="아이디를 입력하세요." value={name} onChange={change}></input>
        <Link
            to={{
                pathname:`/history/userName=${name}`,
                state:{name}
            }}
        >
          <input type="button" value="검색!"></input>
        </Link>
      </section>
    </div>
  );
}

export default Home;
