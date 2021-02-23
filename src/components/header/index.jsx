import React from 'react'
import styled from 'styled-components'
import LogoMeuTudo from '../../assets/tudo-logo.png'
import {Link} from 'react-router-dom'

const MainHeader = styled.div`
    width: 100%;
    min-height:160px;
    background-color: black;
    border-radius: 0px 0px 40px 0px;
`
const Name = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-size:16px;
    color: white;
    margin-top:20px;
`
const Value = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size:25px;
    color: #D22688;
    margin-top: 2px;
`
const Span = styled.span`
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    font-size:12px;
    color: white;
    margin-top: 16px;
`
const Logo = styled.img`
    width: 30px;
    margin-left: 8px;
    margin-top: 10px;
`

const Icon = styled.i`
    color: white;
`

export default function Header(props){
    return(
        <MainHeader>
            <div>
                <i className="far fa-bell"></i>
                <Link to='/'><Logo src={LogoMeuTudo} alt=""/></Link>
                
            </div>

            <div style={{textAlign:'center'}}>
                <Name>Olá, José Carlos</Name>
                <Span>Seu crédito disponível é de</Span>
                <Value>R$ {props.totalMaxValue}</Value>
            </div>

            <Icon></Icon>

        </MainHeader>
    )
}