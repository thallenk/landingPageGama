import styled from 'styled-components'

export const Time = styled.div` 
  display:flex;
  width:100%;
  margin-right: auto;
  max-width: 1000px;
  padding: 30px;

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
    max-width:500px;
    height:120px;
    display:grid;
    margin-top:10px;
    margin-bottom: -100px;
    grid-template-areas: "dia";
    //largura da primeira coluna, segunda e terceira coluna respectivamente
    grid-template-columns:200px;
    .year {
      font-size: 200px;
      z-index: -1;
      opacity: 0.2;
      position: absolute;
      bottom: 10px;
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
    font-size:10px;
  }
}

  }
`
export const Box = styled.div`
  margin-left:50%;
  background-color:rgb(102,0,102);
  color:white;
  margin-left:197px;
  /* CSS Pré-Pronto */
  margin-bottom: -37px;
  width:420px;

    & h3{
        text-align: center;
    }
    @media(min-width:860px){
      background-color:rgb(102,0,102);
      color:white;
      //border-radius: 8px;
      height:30px;
      width:460px;
      display:flex;
      font-size:25px;
      margin-left:267px;
      //flex-wrap: wrap;
      flex-direction: column;
      text-align:center;
      margin-top:-10px;
      & h3{
        text-align:center;
        //margin-left:1%;
        font-size:15px;
        margin-top:-10px;
        
      }
    }



`
