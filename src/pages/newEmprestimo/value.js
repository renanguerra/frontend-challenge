import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../globalStyles'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {store} from '../../store'

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
const Subtitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  margin-top: 15px;
  text-decoration: underline;
  font-size: 13px;
  color: #D22688;
`

export default function NewEmprestimo(){
    const [suggestedValues,setSuggestedValues] = useState([])
    const [valueSelected, setValueSelected] = useState()
    const [min,setMin] = useState()
    const [max,setMax] = useState()
    const history = useHistory()

    function AddValue() {
        if(valueSelected >= min && valueSelected <= max){
            store.dispatch({
                type: 'ADD_VALUE',
                payload: valueSelected
            })
            history.push('/emprestimo/tempo')
        } else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'O valor que você selecionou é inválido! Verifique seu limite e tente novamente',
              })
        }
       
    }


    useEffect(()=>{
        const copyValue = []
        axios.get('https://demo7273790.mockable.io/suggestedvalues').then(res=>{
            res.data.suggestedValues.map((e) =>{
                const value = e.toFixed(2)

                copyValue.push(value)
            })
            setSuggestedValues(copyValue)
            setMin(res.data.minValue)
            setMax(res.data.maxValue)
        })
    },[])


    return(
        <div>
            <GlobalStyles/>

            <Header>
                <span >Novo Emprestimo</span>
            </Header>

            <Title>De quanto você precisa?</Title>
            
            <Body>
                {suggestedValues.map((e,index) => (
                    <MainTag key={index} onClick={() => setValueSelected(e)}>
                        <Value>R$ {e}</Value>
                    </MainTag>
                ))}
            </Body>    

            <div style={{textAlign: 'center'}}>
                <div>
                    <Title>Outro Valor </Title>
                    <Input onChange={e => setValueSelected(e.target.value)} placeholder='R$ 300,00' type='text'></Input>
                </div>

                <Link onClick={AddValue}>
                    <Button>Continuar</Button>
                </Link>
               
            
                <Subtitle>Simule pela parcela</Subtitle>
            </div>
            
            <Menu/>
        </div>
    )

}