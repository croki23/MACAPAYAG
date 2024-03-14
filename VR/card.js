const card1 = ( title1,para1,para2,para3) => {
    let leftDiv = document.createElement("div")
    leftDiv.innerHTML = `

    <h1>${title1}</h1>
    <p>${para1}</p>
    <p>${para2}</p>
    <p>${para3}</p>
    `
    
    leftDiv.className = "cardo"

    return leftDiv;
}
