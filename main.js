const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const pies = [
    {
    pieName: 'Cherry Pie',
    image: './images/cherryPie.jpg',
    instructorFirstName: 'michael'
    },
    {
    pieName: 'Caramel Apple',
    image: './images/caramelApplePie.jpg',
    instructorFirstName: 'zoe'
    },
    {
    pieName: 'Lemon Meringue Pie',
    image: './images/lemonMeringuePie.jpg',
    instructorFirstName: 'callan'
    },
    {
    pieName: 'Key Lime Pie',
    image: './images/keyLimePie.jpg',
    instructorFirstName: 'zoe'
    },
    {
    pieName: 'Buttermilk Pie',
    image: './images/buttermilkPie.jpg',
    instructorFirstName: 'callan'
    },
    {
    pieName: 'Peanut Butter Pie',
    image: './images/peanutButterPie.jpg',
    instructorFirstName: 'michael'
    },
]

const printPies = (pieArr) => {
    for (let i = 0; i < pieArr.length; i++) {
        const pieType = pieArr[i];
        const piesToPrint = 
        `
        <div class="pie-card">
        <h1>${pieType.pieName}</h1>
        <img src="${pieType.image}">
        <p class="instructor">${pieType.instructorFirstName}</p>
        </div>
        `
        printToDom(piesToPrint, 'container');
    }
}


//SAMPLE OF EVENT LISTENER//
// document.getElementById('my-button').addEventListener('click', () => {
//     console.log('🎨');
// })

// document.getElementById('my-button').addEventListener('click', () => {
//     printPies(pieArr);
// })
// You will not be able to call a function within the event listener (first parens); call after bracket

printPies(pies);


