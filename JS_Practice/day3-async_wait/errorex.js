import axios  from "axios";

async function httpGetCall(url){

    try{

        return await axios.get(url)
    }
    catch(err){
        console.log(err.response.data)
    }
}

//let response = await httpGetCall('https://www.boredapi.com/api/activity1')
let response = await httpGetCall('https://httpstat.us/400')
console.log(response)