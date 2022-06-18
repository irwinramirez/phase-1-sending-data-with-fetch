const format = require("sinon/lib/sinon/util/core/format");

// Add your code here
// const configurationObject = {
// //letting fetch know we are sending a POST request
//     method: "POST",
// //include a metadata in the form of headers
//     headers: { 
//         "Content-Type" : "application/json",
//         "Accept" : "application/json",

//     }
//     //data being sent must be stored in the body *NEEDS TO BE STRINGIFIED*

//     body: JSON.stringify({
//         name:""
//     })

// }


function submitData(name, email){
    const configurationObject = {
        //letting fetch know we are sending a POST request
            method: "POST",
        //include a metadata in the form of headers
            headers: { 
                "Content-Type" : "application/json",
                "Accept" : "application/json",
        //apparently add a comma after " } " ERROR IF NOT
            },
            //data being sent must be stored in the body *NEEDS TO BE STRINGIFIED*
        
            body: JSON.stringify({

                name:`${name}`,
                email:`${email}`,

            })
        
        }
        
    return fetch ('http://localhost:3000/users', configurationObject)
    .then(function(resp){
        return resp.json()
    })
    .then(body => addNewContact(body.id))

    .catch( alertMessage => {
        alert(`Unauthorized Access`)
        console.log(alertMessage)
        document.body.append(alertMessage)
    })


}
function addNewContact(newID){
    document.getElementsByTagName("body").innerHTML = newID
    document.body.append(newID)
}
// function alertMessage(error){
//     document.getElementsByTagName("body").innerHTML = error
//     document.body.appendChild(error)
// }