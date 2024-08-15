import React from 'react'
import Header from './header'
import Accordion from './accordion'
function App() {

  const tutorialList = [`Clique em Gerar Piada para receber uma piada do Chuck Norris.`, `Você pode selecionar uma categoria da lista de categorias para receber piadas de uma categoria especifica.`, `Caso deseje ver outra piada da mesma categoria, clique no botão Gerar Novamente.`]

  return (
    <div className='flex flex-col justify-center text-center gap-y-6'>
      <Header/>
      <Accordion titulo='Como Funciona?' lista={tutorialList} keyProp='passoTutorial_'/>
    </div>
  )
}

export default App
