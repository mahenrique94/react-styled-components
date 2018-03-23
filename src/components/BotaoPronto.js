import React, { Component } from "react";
import styled from "styled-components";

class BotaoPronto extends Component {

    render() {
        return(
            <button className={ this.props.className } onClick={ this.ola }>{ this.props.children }</button>
        );
    }

    ola() {
        alert("Ola");
    }

}

const StyledBotaoPronto = styled(BotaoPronto)`
    background: #FF8080;
    border: 2px solid #FF8080;
    color: #FDFDFD;
    padding: 1rem 1.5rem;
`;

export default StyledBotaoPronto;