document.getElementById('button_search').addEventListener('click', getFetch)


function getFetch() {
    url = 'http://ccdb.hemiola.com/characters/strokes/'
    input = document.getElementById('search_input').value
    if (isNaN(input)) {
        alert(`Please input a numerical value.`)
    }
    let resultList = document.getElementById('result_list')
    resultList.innerHTML = ''

    fetch(url + input)
        .then(res => res.json())
        .then(data => {
            data.forEach( character => {
                let createLi = document.createElement('li')
                resultList.appendChild(createLi).innerText = character.string
            })
            console.log(data)
        })
}


