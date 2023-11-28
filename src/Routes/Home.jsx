import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {theme, setTheme} = useContextGlobal()

  const [list,setList] = useState([])
  const parametroUrl = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() =>{
    axios(parametroUrl)
    .then(res => setList(res.data))
  },[])

  return (
    <main className="" id={theme}>
      <h1 class="titulo">Home</h1>
      <div className='card-grid'>
        {list.map((odonto) => <Card odonto={odonto} key={odonto.id} />)}
      </div>
    </main>
  )
}

export default Home