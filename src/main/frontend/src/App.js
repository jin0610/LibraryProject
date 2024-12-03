import {useEffect, useState} from "react";
import client from "./client";


function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    console.log("start")
    client.get('/api/main').then((res) => {
      console.log(res.data.msg)
      setHello(res.data.msg)
    }).catch((err) => console.log(err))

  },[])
  
  return (
    <div>
      백엔드 데이터 : {hello}
    </div>
  )
}

export default App;