import React, { useState }from 'react'
import * as S from './styled.js'
import Product  from '../../components/Products/index'
import Header from '../../components/Main/main'
import Countdown from "../../components/Time/index"
import img1 from "../../assets/images/products/logo.png" 

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
        <Countdown/>
        <S.MainBox>
            <div div1>
            <S.Box>
                <a href="https://www.instagram.com/sheilaoticas/" target="blank">
                    <img src={img1}/> @sheilaoticas
                </a>

            </S.Box>
            </div>
            <div div2>
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
            </div>

            
        </S.MainBox> 
   
        <Product/>

        </>
    )
}

export default Home;