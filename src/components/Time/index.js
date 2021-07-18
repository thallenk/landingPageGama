import { useContext, useEffect } from "react"
import * as S from "./styled"
import { CountdownContext } from "./time.jsx"


export default function Countdown() {
    const{
        days,
        hours,
        minutes,
        seconds,
        finished,

    } = useContext(CountdownContext)

    const second = seconds < 10 ? '0' + seconds : seconds
    const minute  = minutes < 10 ? '0' + minutes : minutes
    const hour  = hours < 10 ? '0' + hours : hours
    const day = days < 10 ? '0' + days : days

    useEffect(()=>{
        finished && alert("SUPER MEGA PROMOÇÃO COMEÇA AGORA!")
    },[finished])


    return(
        <>
        {/* <S.H3>
            FALTAM APENAS:
        </S.H3> */}
        <S.Time className="countdown">
            <S.Box>
                <div id ="dias" className="time">
                    <h3>FALTAM APENAS: {day}dias : {hour}hrs : {minute}min : {second}s </h3>
                    {/* <small>dias </small> */}
                </div>
            </S.Box>
        </S.Time>    
  

        </>
    )
}


        