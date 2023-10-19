let employees = [
    {
        "name": "Joyce",
        "exp": 5
    },
    {
        "name": "Wynn",
        "exp": 1
    },
    {
        "name": "Dale",
        "exp": 0
    }
]

let Freshers = employees.map(getfreshers)

function getfreshers(element){
    return element.exp == 0
}

console.log(Freshers)