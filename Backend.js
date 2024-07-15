const express = require('express');
const app = express();

// const React = require('react');
// const [userData,setUserData]=React.useState("")

// fetch(url)
// .then((response)=>{
//    return response.json()
// })
// .then((data)=>{
//     console.log(data)
//     setUserData(data)
// })
// .catch(e=>{
//     console.log(e)
// })
// app.get('/user',()=>{
//     console.log(userData);
// })

const getData=async ()=>{
    let resData = await fetch('https://jsonplaceholder.typicode.com/users/1',{
        method:'PUT',
        header:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name:'hari dhaker'
        })
    })
    const data = await resData.json()
    console.log(data);
}
getData();


app.listen(3000,()=>{
    console.log("App is listing at 3000")
})


