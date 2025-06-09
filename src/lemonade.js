const example = string => {
    console.log(string)
}

let incrementButton = document.getElementById('incrementButton')
console.log(incrementButton)

incrementButton.addEventListener("click", () => example("Hello World"))