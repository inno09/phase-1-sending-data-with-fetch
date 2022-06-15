// Add your code here
// Test 1 - Send Data
function submitData(name,email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
           name,
           email
        } )
    })
    // Test 2 - Handle the Response
    .then(function(resp){
        return resp.json()
    })
    
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    // Test 3 - Handle Errors
    .catch(function(error){
        document.body.innerHTML = error.message  
    })

}



// Test 4 - Return the Fetch Chain