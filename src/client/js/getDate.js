function getDate() {
    let day = new Date();
    let newDate = (day.getMonth() + 1)+'/'+ (day.getDate())+'/'+ (day.getFullYear());
    const juanito2 =document.getElementById('juanito-2')
    juanito2.innerHTML = `You said this at ${newDate}.`
}


export { getDate }