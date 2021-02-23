import React from 'react'
import styled from 'styled-components'

const MainButton = styled.button`
    margin-top:40px;
    color: white;
    background-color:  #D22688;
    width: 150px;
    height:40px;
    border:none;
    border-radius: 100px;
    font-size:14px;
    font-family: 'Montserrat';
    font-weight:bold;
    outline: none;
    cursor:pointer;
`

export default function Button(props){
    return(
        <MainButton>{props.children}</MainButton>
    )
}
