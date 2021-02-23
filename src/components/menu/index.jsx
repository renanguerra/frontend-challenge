import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import Icon1 from '../../assets/newLoan.png'
import Icon2 from '../../assets/portability.png'
import Icon3 from '../../assets/refinancing.png'
import Icon4 from '../../assets/creditCard.png'

const MainMenu = styled.div`
    width: 100%;
    min-height:50px;
    background-color:white;
    bottom: 0;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content:center;
`
const Icon = styled.img`
    width: 25px;
`

const DivIcon = styled.div`
    display: inline-block;
    text-align:center;
    justify-content:center;
    margin: 10px 10px 10px 10px;
`

const TitleIcon = styled.span`
    display:block;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
`

export default function Menu(){
    return(
        <MainMenu>
            <Link to='/'>
                <DivIcon>
                    <Icon src={Icon1} />
                    <TitleIcon>Inicio</TitleIcon>
                </DivIcon>
            </Link>
           <DivIcon>
                <Icon src={Icon2} />
                <TitleIcon>Contratos</TitleIcon>
           </DivIcon>

           <DivIcon>
                <Icon src={Icon3} />
                <TitleIcon>Duvidas</TitleIcon>
           </DivIcon>

            <DivIcon>
                <Icon src={Icon4} />
                <TitleIcon>Conta</TitleIcon>
            </DivIcon>         
        </MainMenu>
    )
}