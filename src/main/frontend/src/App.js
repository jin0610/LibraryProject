import {useEffect, useState} from "react";
import client from "./client";
import Header from "./component/Header";

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    client.get('/main')
    .then((res) => setHello(res.data))
    .catch((err) => console.log(err))
  },[])
  
  return (
    <div>
      백엔드 데이터 : {hello}
      <Header/>
    </div>
  )
}

export default App;