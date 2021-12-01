function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
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
