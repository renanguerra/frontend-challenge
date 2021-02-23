import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {store} from '../../store'

import Header from '../../components/header'
import Card from '../../components/card'
import Menu from '../../components/menu'
import styled from 'styled-components'
import GlobalStyles from '../../globalStyles'

import Icon1 from '../../assets/newLoan.png'
import Icon2 from '../../assets/portability.png'
import Icon3 from '../../assets/refinancing.png'
import Icon4 from '../../assets/creditCard.png'

const MainBody = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  width:85%;

`
const Title = styled.h4`
  margin-top:20px;
  margin-left:10px;
  margin-bottom:-10px;
  font-family: 'Montserrat', sans-serif;
`

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get('https://demo7273790.mockable.io/margins').then(res => {
      setData(res.data)

      store.dispatch({
        type: 'RESET'
    })
    })
    
  },[])

  return (
    <div className="App">
      <GlobalStyles/>

      <Header totalMaxValue={data.totalMaxValue}/>

      <Title>Oportunidades</Title>

      <MainBody>
        <Link style={{textDecoration: 'none'}} to='/emprestimo'>
          <Card disable={false} value={data.loanMaxValue} icon={Icon1} text='Novo Empréstimo'/>
        </Link>
        
        <Card disable={false} icon={Icon2} value={data.portabilityMaxValue} text='Portabilidade'/>
        <Card disable={true} icon={Icon3} text='Refinanciamento'/>
        <Card disable={true} icon={Icon4} text='Cartão de crédito consignado'/>
      </MainBody>

      <Menu/>
    </div>
  );
}

export default App;
