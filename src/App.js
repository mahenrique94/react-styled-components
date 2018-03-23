import React, { Component } from 'react';

import BotaoPronto from "./components/BotaoPronto";
import MeuBotao from "./components/MeuBotao";
import { Aviso, Informacao, Successo } from "./components/BotaoEstendido";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MeuBotao>Meu Botão</MeuBotao>
        <BotaoPronto>Botão Pronto</BotaoPronto>
        <Aviso>Botão Aviso</Aviso>
        <Informacao>Botão Informacao</Informacao>
        <Successo>Botão Successo</Successo>
      </div>
    );
  }
}

export default App;