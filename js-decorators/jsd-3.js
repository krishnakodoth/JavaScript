// Decorator Example 3
// Decorating an async API Call function
// Time data requests during development
import fetch from "node-fetch";
let requestData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err)
    }
}

// Decorator
const dataResponseTime = (fn) => {
    return async (url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data;
    }
}

const testApiCall = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData("https://jsonplaceholder.typicode.com/users");
    console.log(data);
}

testApiCall();