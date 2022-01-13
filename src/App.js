import React, {useEffect,useState} from 'react'

function App() {

  const [backendData,setBackendData] = useState([{}])

  useEffect(()=>{
    console.log("hello world");
    fetch("/api").then(
      response => response.json()
    ).then(data=>{
      console.log(data)
      setBackendData(data);
    })
  },[])
  return (
    <div>
      {backendData?.users?.map((data,index)=>(
        <p key={index}>{data}</p>
      ))}
    </div>
  )
}

export default App
