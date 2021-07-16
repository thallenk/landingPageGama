import styled from 'styled-components';


export const Main = styled.main`
    width:40%;
    margin-left: 28%;
    margin-right: auto;
    max-width: 800px;
    padding: 20px;
    font-family: sans-serif;
    background-color:#600066;
    & h1 {
            color: white;
            font-weight: 800;
            max-width:800px;
            text-align:center;

            

    }
    & h3 {
        max-width:800px;
        text-align:center;
        color: yellow;
        font-weight: 600;
        margin-top: 10px;
        margin-left:7%;

    
    }
    @media(min-width:860px){
        max-width:2000px;
        margin-left: auto;
        margin-right:auto;
        width:1555px;
        height:100px;
        margin-left:-130px;
        height: 120px;
        margin-bottom:none;
        
            
        & h1 {
            color: white;
            font-weight: 800;
            text-align:center;
            margin-left:15%;  
            }
        
        & h3 {
        text-align:center;
        color: yellow;
        font-weight: 600;
        margin-top: 10px;
        font-size:15px;
        margin-left:15%;

    
    }
 
    }


        
    



`