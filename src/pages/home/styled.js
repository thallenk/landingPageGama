import styled from 'styled-components'
import img1 from "../../assets/images/products/logo.png" 

export const Form = styled.div`
    margin-bottom:0;
    text-align: center;
    margin-top: 10%;
    
    & p {
        color: yellow;
        font-weight: 600;
        margin-top:30px;
        @media(min-width:860){
            margin-bottom:50px;
            text-align: center;
            margin-top:0px;

            
            
            

        }
    }
    @media(min-width:860){
       margin-bottom:10%;
    } 
   
`
export const MainBox = styled.main`
    display:grid;
    width:40%;
    margin-left: 27%;
    margin-right: auto;
    max-width: 500px;

    @media(min-width:860px){
    max-width:1110px;
    display:grid;
    margin-top: 20px;
    grid-template-areas: "div1 div2";
    //largura da primeira coluna, segunda e terceira coluna respectivamente
    grid-template-columns: auto;
    grid-template-rows: 50px auto auto; 
    width:40%;
    margin-left: 27%;
    margin-right: auto;
    margin-bottom: 150px;

    img{
      height: 200px;
      width: 200px;
      @media(min-width:860px){
        height: 200px;
        width: 200px;
      }
    }
  }
 
`

export const Box = styled.div`
    background-image: url(${img1});
    display:flex;
    //flex-wrap: wrap;
    flex-direction: column;
    height: 290px;
    width:420px;
    margin-left:-16%;
    @media(min-width:860px){
      width:230px;
      height: 200px;
      display:flex;
      margin-left:0%;
      //flex-wrap: wrap;
      flex-direction: column;
      & a{
          color:white;
          font-weight: 800;
          @media(min-width:860px){
          color:white;
          font-weight: 800;
          margin-top:0px;
          }
      }

    }

`

export const Input = styled.input`
    margin-bottom: 5px;
    background-color: white;
    border: 1px solid white;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 50px;
    //margin: .5rem;
    margin-right: 0;
    //para tirar o negrito do input quando clica nele, é o mesmo que dizer input.focus:
    &:focus,
    &active{
        outline: none;
        box-shadow: none;
    }
    @media(min-width:860){
            margin-left:40%;
           
            
            

        }
`
export const Button = styled.button`
    border: 1px solid white;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 50px;
    margin: .5rem;
    margin-right: 0;
    //para tirar o negrito do input quando clica nele, é o mesmo que dizer input.focus:
    &:focus,
    &active{
        outline: none;
        box-shadow: none;
    }
    `