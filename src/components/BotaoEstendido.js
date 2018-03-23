import React, { Component } from "react";
import styled from "styled-components";

class Botao extends Component {

    render() {
        return(
            <button className={ this.props.className }>{ this.props.children }</button>
        );
    }

}

const EsqueletoBotao = styled(Botao)`
    border: 1px solid transparent;
    border-radius: 2px;
    color: #FDFDFD;
    font-size: 1.125rem;
    margin: 1rem;
    padding: .75rem 2rem;
`;

const Aviso = EsqueletoBotao.extend`
background: #FF9900;
border-color: #FF9900;
`;

const Informacao = EsqueletoBotao.extend`
background: #33CCFF;
border-color: #33CCFF;
`;

const Successo = EsqueletoBotao.extend`
    background: #00CC99;
    border-color: #00CC99;
`;

export { Aviso, Informacao, Successo };