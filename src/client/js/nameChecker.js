function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Hook",
        "Peter",
        "Edward"
    ]

    if(names.includes(inputText)) {
        try {
            alert('Welcome, Captain!!')
        }
        catch(err){
            document.getElementById('juanito').innerText = "Error caughting your request!";
        }
    }
}

export { checkForName }
