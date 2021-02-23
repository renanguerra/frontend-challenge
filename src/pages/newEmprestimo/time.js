import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import GlobalStyles from '../../globalStyles'
import styled from 'styled-components'
import axios from 'axios'
import {store} from '../../store'
import Swal from 'sweetalert2'

import Menu from '../../components/menu'
import Button from '../../components/button'

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
const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;;
    padding: 15px;
    
`
const Title = styled.h5`
  display:inline-block;
  margin-top:20px;
  margin-left:10px;
  margin-right:10px;
  margin-bottom:-10px;
  font-family: 'Montserrat', sans-serif;

`
const Input = styled.input`
  display:inline-block;
  text-align:center;
  width:80px;
  background-color: #ECECEC;
  border:none;
  border-bottom:0.5px solid black;
  font-family: 'Montserrat', sans-serif;
  outline: none;
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
    const [suggestedInstallments,setSuggestedInstallments] = useState([])
    const [timeSelected, setTimeSelected] = useState()
    const [min,setMin] = useState()
    const [max, setMax] = useState()
    const history = useHistory()



    useEffect(()=>{
        axios.get('https://demo7273790.mockable.io/suggestedperiods').then(res =>{
            setSuggestedInstallments(res.data.suggestedInstallments)
            setMin(res.data.minValue)
            setMax(res.data.maxValue)
        })
    },[])

    function AddTime() {
        if(timeSelected >= min && timeSelected <= max){
            store.dispatch({
                type: 'ADD_TIME',
                payload: timeSelected,
            })
            history.push('tempo/banco')
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'A quantidade de meses que você selecionou é inválido!',
              })
        }
        
    }

    return(
        <div>
            <GlobalStyles/>

            <Header>
                <span>Novo Emprestimo</span>
            </Header>

            <Title>Em quanto tempo você quer pagar?</Title>
            
            <Body>
                {suggestedInstallments.map((e,index) => (
                    <MainTag key={index} onClick={() => setTimeSelected(e)}>
                        <Value>{e} meses</Value>
                    </MainTag>
                ))}
            </Body>    

            <div style={{textAlign: 'center'}}>
                <div>
                    <Input onChange={e => setTimeSelected(e.target.value)} placeholder='00' type='text'></Input>
                    <Title>meses </Title>
                </div>

                <Link onClick={AddTime}>
                    <Button>Continuar</Button>
                </Link>
                
            </div>
            
            <Menu/>
        </div>
    )

}