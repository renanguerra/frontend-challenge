import React from 'react'
import styled from 'styled-components'
import logoMeuTudo from '../../assets/tudo-logo.png'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'


const MainCard = styled.div`
    height:170px;
    width:90%;
    background-color:white;
    border-radius:10px;
    margin:0 auto;
    margin-top: 20px;
    border-left:4px solid #D22688;
    padding:5px;
`
const Img = styled.img`
    width:45px;
    padding:5px;
    border-radius:5px;
    border: 1px solid rgba(0, 0, 0, 0.20);
`
const Parcelas = styled.span`
    display:block;
    font-family: 'Montserrat',sans-serif;
    font-weight:bold;
    font-size:11px;
`
const Valor = styled.span`
    font-family: 'Montserrat',sans-serif;
    display:block;
    color: #D22688;
    font-weight:bold;
    font-size: 18px;
`
const Total = styled.span`
    display:block;
    font-family: 'Montserrat',sans-serif;
    font-size: 11px;
`
const Contratar = styled.span`
    display:block;
    font-family: 'Montserrat',sans-serif;
    font-weight:bold;
    font-size: 12px;
    color: #D22688;
    float: right;
    margin-right:10px;
    cursor:pointer;
`
const DivLeft = styled.div`
    display:flex;
    margin-top:20px;
    border-right: 1px solid rgba(0, 0, 0, 0.20);
    width:65%;
    margin-bottom: 20px;
`
const DivRight = styled.div`
    margin-top:20px;
    text-align:center;
    width:35%;
`
const DivTop = styled.div`
    display:flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
`
const DivBottom = styled.div`
    margin-top: 15px;
`
const DivDescription = styled.div`
    margin-left:10px;
`

export default function CardBank(props){
    const history = useHistory()

    function contratar(){
        Swal.fire(
            'Parabéns!',
            'Você contratou seu emprestimo!',
            'success'
          ).then(()=>{
            history.push('/')
          })

          
    }

    return(
        <MainCard>
            <div>
                <DivTop>
                    <DivLeft>   
                        <Img src={logoMeuTudo}/>

                        <DivDescription>
                            <Parcelas>{props.parcelas} parcelas de</Parcelas>
                            <Valor>R$ {(props.valorTotal/props.parcelas).toFixed(2)}</Valor>
                            <Total>Total de R$ {props.valorTotal}</Total>
                        </DivDescription>
                    </DivLeft>

                    <DivRight>
                        <Total>Com taxas de </Total>
                        <Parcelas>1,30% a.m.</Parcelas>
                    </DivRight>

                </DivTop>
               
               <DivBottom>
                    <Total>Previsão de pagamento</Total>
                    <Parcelas>19 de maio a 01 de junho de 2020</Parcelas>
                    <Contratar onClick={e => contratar()}>Contratar {'>'}</Contratar>
               </DivBottom>

            </div>
        </MainCard>
    )
}