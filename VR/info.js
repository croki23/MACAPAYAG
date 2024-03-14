const func1 = ( title,para,button) => {
    let leftDiv = document.createElement("div")
    leftDiv.innerHTML = `

    <h1>${title}</h1>
    <p>${para}</p>
    <button>${button}</button>`
    
    
    leftDiv.className = "ClassL"


    return leftDiv;
}

export { func1 };