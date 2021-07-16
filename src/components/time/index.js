import {Time, Box} from "./../time/styled"


export default function Header() {
    return(

        <Time className="countdown">
            {/* <p> Faltam APENAS:</p> */}
            <Box>
                <div dia id ="dias" className="time">
                    <h3>00</h3>
                    <small>dias</small>
                </div>
            </Box>
            <Box>
                <div dia id ="horas" className="time"> 
                    <h3>00</h3>
                    <small>horas</small>
                </div>
            </Box>
            <Box>
                <div dia id ="minutos" className="time">
                    <h3>00</h3>
                    <small>minutos</small>
                </div>
            </Box>
            <Box>
                <div dia id ="minutos" className="time">
                    <h3>00</h3>
                    <small>segundos</small>
                </div>
            </Box>
        </Time>
        
    )
}


        