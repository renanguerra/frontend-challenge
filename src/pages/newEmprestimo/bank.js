import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../globalStyles'
import styled from 'styled-components'
import {store} from '../../store'

import Menu from '../../components/menu'
import CardBank from '../../components/cardBank'

const Title = styled.h5`
  display:inline-block;
  margin-top:20px;
  margin-left:10px;
  margin-right:10px;
  margin-bottom:-10px;
  font-family: 'Montserrat', sans-serif;
`
const Header = styled.div`
    width:100%;
    height:80px;
    background-color:black;
    display:flex;
    border-radius: 0px 0px 40px 0px;
    justify-content:center;
    align-items:center;

    span{
        font-family:'Montserrat',sans-serif;
        font-size: 14px;
        margin-top:20px;
        color: white;
    }
`


export default function NewEmprestimo(){
    const [data,setData] = useState([])
    const [parcelas,setParcelas] = useState()
    const [valorTotal,setValorTotal] = useState()

    useEffect(()=>{
        setData(store.getState())
    },[])

    useEffect(()=>{
        setValorTotal(data[0])
        setParcelas(data[1])
    },[data])

    return(
        <div>
            <GlobalStyles/>

            <Header>
                <span>Novo Emprestimo</span>
            </Header>

            <Title>Escolha um banco.</Title>
            
            <CardBank valorTotal={(((valorTotal)*(parcelas*1.30))/parcelas).toFixed(2)} parcelas={parcelas}></CardBank>  

            <Menu/>
        </div>
    )

}