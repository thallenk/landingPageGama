import { createContext, useEffect, useState } from "react"

//utilizando o createContext para poder utilizar em qualquer local os valores da função
export const CountdownContext = createContext({});

const nextDate = new Date().getDate() + 6
const endDate = new Date(`July ${nextDate} 2021 23:55:55`)
const currentTime = new Date(`July ${new Date().getDate()} 2021 23:55:55`)

export function UpdateCountDown({children}) {
    const [time, setTime] = useState(Math.floor((endDate - currentTime)/1000));
    const [finished, setFinished] = useState(false);
    //converte o tempo para dias, horas e minutos
    const days = Math.floor(time/60/60/24);
    const hours = Math.floor(time/60/60) % 24;
    const minutes = Math.floor(time/60) % 60;
    const seconds = time % 60;



    useEffect(()=> {
        if(time > 0){
            setTimeout(() => {
                setTime(time - 1)
                
            }, 1000);

        }else if (time === 0){
          
            setFinished(true)
        }
        console.log('entrei')
    }, [time])

    return (
        <CountdownContext.Provider value = {
            {
                days,
                hours,
                minutes,
                seconds,
                finished
            }}>
                {children}
        </CountdownContext.Provider>

    
    );
}   


