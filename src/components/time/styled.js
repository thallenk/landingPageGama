import styled from 'styled-components'

export const Time = styled.div` 
  display:flex;
  width:100%;
  grid-gap: 10px;
  margin-right: auto;
  max-width: 1000px;
  padding: 30px;
  & p {
      color: white;
      text-align: center;
      margin-bottom: 20px;
      font-size: 10px;
      font-family: sans-serif;
      font-weight: 700px;
      margin-left:80px;
  }
  & h3{
    margin-left:100%;
  }
  .dia{
    display:none;
    @media(min-width:860px){
      display: block;

    }
    }
    .hora{
    display:inline-block;
    @media(min-width:860px){
      display: block;

    }
    }
    .minuto{
    display:inline-block;
    @media(min-width:860px){
      display: block;

    }
    }
    @media(min-width:860px){
    max-width:1110px;
    display:grid;
    margin-top:none;
    margin-left: 29%;
    grid-template-areas: "dia hora minuto";
    //largura da primeira coluna, segunda e terceira coluna respectivamente
    grid-template-columns:80px 80px 80px;
    .year {
      font-size: 200px;
      z-index: -1;
      opacity: 0.2;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
}

.countdown {
  display: flex;
  transform: scale(2);
}

.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

.time h2 {
  margin: 0 0 5px;
}

@media (max-width: 500px) {
  h3 {
    font-size: 10px;
    margin:0;
  }

  .time {
    margin: 5px;
  }

  .time h2 {
    font-size: 12px;
    margin: 0;
  }

  .time small {
    font-size: 10px;
  }
}

  }
`



export const Box = styled.div`
  margin-left:50%;
  /* CSS Pré-Pronto */
  //margin-bottom: 10px;
  margin-top: 10px;
    & h3{
        text-align: center;
        
    }
    @media(min-width:860px){
      background-color: white;
      border-radius: 8px;
      height:80px;
      width:80px;
      display:flex;
      font-size:25px;
      //flex-wrap: wrap;
      flex-direction: column;
      text-align:center;
      & h3{
        text-align:center;
        margin-left:20%;
      }
    }

`