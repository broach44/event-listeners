const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
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
    let piesToPrint= ''
    for (let i = 0; i < pieArr.length; i++) {
        const pieType = pieArr[i];
        piesToPrint += 
        `
        <div class="pie-card">
        <h1>${pieType.pieName}</h1>
        <img src="${pieType.image}">
        <p class="instructor">${pieType.instructorFirstName}</p>
        </div>
        `
        
    }
    printToDom(piesToPrint, 'container');
}


//SAMPLE OF EVENT LISTENER//
// document.getElementById('my-button').addEventListener('click', () => {
//     console.log('🎨');
// })

// document.getElementById('my-button').addEventListener('click', () => {
//     printPies(pieArr);
// })
// You will not be able to call a function within the event listener (first parens); call after bracket

// printPies(pies);

// document.getElementById('zoe-button').addEventListener('click', () => {
// //figure out Who this instructor is for the button we clicked on
//     const instructor = 'zoe';
// //only get those pies from the list of all the pies
//     const zoesPies = []
//     for (let i = 0; i < pies.length; i++) {
//         const pie = pies[i];
//         if (pie.instructorFirstName === instructor) {
//             zoesPies.push(pie);
//         }
//     }
// //smaller list of pies back into the printPies function

//     printPies(zoesPies)
// })

// document.getElementById('michael-button').addEventListener('click', () => {
//     //figure out Who this instructor is for the button we clicked on
//         const instructor = 'michael';
//     //only get those pies from the list of all the pies
//         const michaelsPies = []
//         for (let i = 0; i < pies.length; i++) {
//             const pie = pies[i];
//             if (pie.instructorFirstName === instructor) {
//                 michaelsPies.push(pie);
//             }
//         }
//     //smaller list of pies back into the printPies function
    
//         printPies(michaelsPies)
//     })

const buttonClick = (e) => {
    const instructor = e.target.id
    const selectedPies = []
    for (let i = 0; i < pies.length; i++) {
        const pie = pies[i];
        if (pie.instructorFirstName === instructor) {
            selectedPies.push(pie);
        }
    }
    printPies(selectedPies)
}

    document.getElementById('callan').addEventListener('click', (e) => {
        const instructor = e.target.id


        // figure out Who this instructor is for the button we clicked on

        //only get those pies from the list of all the pies
            const selectedPies = []
            for (let i = 0; i < pies.length; i++) {
                const pie = pies[i];
                if (pie.instructorFirstName === instructor) {
                    selectedPies.push(pie);
                }
            }
            printPies(selectedPies)
        })

        document.getElementById('michael').addEventListener('click', (e) => {
            const instructor = e.target.id
                const selectedPies = []
                for (let i = 0; i < pies.length; i++) {
                    const pie = pies[i];
                    if (pie.instructorFirstName === instructor) {
                        selectedPies.push(pie);
                    }
                }
                printPies(selectedPies)
            })

        document.getElementById('zoe').addEventListener('click', buttonClick)

        document.getElementById('all').addEventListener('click', (e) => {
                printPies(pies)
            })




