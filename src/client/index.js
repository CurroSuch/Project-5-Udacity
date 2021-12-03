import './styles/style.scss'
import { postData } from './js/postData'
import { getDate } from './js/getDate'

const button2 = document.getElementById('submit-button-2')
button2.addEventListener('click', function getSentenceValue() {
    const sentence = document.getElementById('sentence').value
    if(sentence !== "" && isNaN(sentence) !== false){
        postData();
    } else{
        const error = document.getElementById('juanito')
        error.innerText = "Your value is not valid!"
    }
})

const button = document.getElementById('submit-button')
button.addEventListener('click', getDate)
