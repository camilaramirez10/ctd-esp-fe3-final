import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()

  return (
    <main className="" id={state.theme}>
      <h1 class="titulo">Home</h1>
      <div className='card-grid'>
        {state.list.map((odonto) => <Card odonto={odonto} key={odonto.id} />)}
      </div>
    </main>
  )
}

export default Home