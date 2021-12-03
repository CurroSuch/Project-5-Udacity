import './styles/style.scss'
import { handleSubmit } from './js/formHandler'
import { postData } from './js/postData'




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
