const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const nextDate = new Date().getDate() + 5
const endDate = new Date(`July ${nextDate} 2021 23:55:55`)
const UpdateCountDown = () => {
    const currentTime = new Date()
    const difference = endDate - currentTime
    //converte o tempo para dias, horas e minutos
    const days = Math.floor(difference/1000/60/60/24)
    const hours = Math.floor(difference/1000/60/60) % 24
    const minutes = Math.floor(difference/1000/60) % 60
    const seconds = Math.floor(difference/1000) % 60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
}

export default setInterval(UpdateCountDown,1000)
