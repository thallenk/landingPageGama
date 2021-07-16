import styled from 'styled-components'

export const ProductGrid = styled.main`
    display:grid;
    width:100%;
    grid-gap: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    padding: 30px;
    
    img {
      height: 200px;
      width:350px;
    }

    @media(min-width:860px){
    width:70%;
    max-width:1110px;
    display:grid;
    margin-left: 15%;
    margin-right: auto;
    grid-template-areas: "div1 div2 div3";
    //largura da primeira coluna, segunda e terceira coluna respectivamente
    grid-template-columns: auto;
    grid-template-rows: 50px auto auto; 
    margin-bottom: 540px;

    img{
      height: 200px;
      width: 200px;
    }
  }
 
`

export const Box = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 5px;
    width:180px;
    .anterior{
      text-decoration: line-through;
    }
    & ul li {
      list-style-type:none;
      
    }
    @media(min-width:860px){
      height: 300px;
      width:230px;
      display:flex;
      //flex-wrap: wrap;
      flex-direction: column;

    }
  

`
export const Caixa = styled.div`
    h3{
      margin-top:10px;
      color: white;
      text-align:center;
      width:400px;
      margin-left:20%;
      margin-right:auto;
    }
    p{
      color:white;
      float:right;
      font-weight:800px;
      font-family: sans-serif;
      background-color:#600066;
      @media(min-width:860px){
        margin-top:-25px;

      }
    }
    @media(min-width:806px){
      h3{
      margin-top:10px;
      color: white;
      text-align:center;
    }

    }

`