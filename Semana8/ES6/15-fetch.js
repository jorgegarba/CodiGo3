//EJEMPLO CON GET
fetch("https://reqres.in/api/users?page=2")
.then((response)=>{
    return response.json();
}).then((json)=>{
    console.log(json);
});
//EJEMPLO CON POST
var config = {
    method: 'POST',
    // body => data a enviar
    body: JSON.stringify({name: "morpheus",job: "leader"}),
    headers: {
        'Content-Type':'application/json'
    },
};
fetch("https://reqres.in/api/users",config)
.then((response)=>{
    return response.json();
}).then((json)=>{
    console.log(json);
});
