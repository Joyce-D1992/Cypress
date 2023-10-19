import axios from 'axios'

// let res = await axios.get('https://httpstat.us/200')
// console.log(res)
// console.log(res.data)

// async function httpGetCall(url){
//     return await axios.get(url)
// }
// let httpResponse = await httpGetCall('https://www.boredapi.com/api/activity')
// console.log(httpResponse.data)
// console.log(httpResponse.data.activity)
// console.log("status code is:" +httpResponse.status)


// axios.get('https://www.boredapi.com/api/activity').then(res=>{
//     console.log(res.data)
// })


axios.get('https://www.boredapi.com/api/activity').then((getResponse)=>{
    console.log(getResponse.data)
})