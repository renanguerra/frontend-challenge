import React from 'react'
import styled from 'styled-components'

const MainTag = styled.button`
    width: 90%;
    height: 50px;
    background-color:white;
    border-radius: 10px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 5px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.127);
    cursor: pointer;
    outline:none;
    border:none;

    :hover{
        color: #D22688
    }

    :focus{
        background-color: #D22688;
        color:white;
    }
`

const Value = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size:14px;
`

export default function Tag({children}){
    return(
        <MainTag>
            <Value>{children}</Value>
        </MainTag>
    )
}