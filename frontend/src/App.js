import React from 'react';

//Importação do estilo global
import GlobalStyles from '../src/styles/global';

//Importações das paginas
import Routes from './routes';

function App() {
  return (
    <>
      <Routes/>
      <GlobalStyles/>
    </>
  );
}

export default App;
