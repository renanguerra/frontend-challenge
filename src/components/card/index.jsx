import React from 'react'
import styled from 'styled-components'

const MainCard = styled.div`
    padding: 10px;
    height:100px;
    width: 100px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.127);
    margin: 3px;
    
    :hover{
        box-shadow: 0px 0px 30px 0px rgba(44, 44, 44, 0.127);
        color: #D22688;
    }
`
const Title = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: bold;
    display: block;
    width: 100px;
    color: black;
    opacity: ${props => props.disable ? '0.3' : '1'};
`
const Value = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    width: 50px;
    color: #D22688;
    opacity: ${props => props.disable ? '0.3' : '1'};
`
const Icon = styled.img`
    width: 35px;
    margin-top:10px;
    opacity: ${props => props.disable ? '0.3' : '1'};
`

export default function Card(props){
    return(
        <MainCard className="">
            <Icon disable={props.disable} src={props.icon}/>
            <Title disable={props.disable}>{props.text}</Title>
            <Value disable={props.disable}>{props.value ? 'Até R$ ' + props.value : ''}</Value>
        </MainCard>
    )
}