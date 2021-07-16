import React, { useState }from 'react'
import * as S from './styled.js'
import Product  from '../../components/Products/index'
import Header from '../../components/Main/main'
import Time from '../../components/time/index'
import img1 from "../../assets/images/products/logo.png" 
import UpdateCountDown from "../../components/time/time"

let listEmail = []
function Home() {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    function renderStorage(){
       
        listEmail.push([name, email])
        console.log(listEmail)
        localStorage.setItem('listEmail', JSON.stringify(listEmail))

    }

    return(
        <>
        <Header/>
        {setInterval(UpdateCountDown,1000)}
        <Time/>
        
        <S.MainBox>
            <S.Box>
                <a href="https://www.instagram.com/sheilaoticas/" target="blank">
                    <img src={img1}/>
                </a>

            </S.Box>
            <S.Box>
                <S.Form>
                    <p>Cadastre seu email para receber as demais promoções!</p>
                    <S.Input type='name' placeholder = 'name' value = {name} onChange = {e => setName(e.target.value)}/>
                    <S.Input type='email' placeholder = 'e-mail' value = {email} onChange = {e => setEmail(e.target.value)}/>
                    <S.Button type='button' onClick={renderStorage}>
                        Enviar
                    </S.Button>
                </S.Form>    
            </S.Box>
            
        </S.MainBox> 
   
        <Product/>

        </>
    )
}

export default Home;