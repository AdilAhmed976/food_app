import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let register = async (e) => {
    e.preventDefault();

    let form_data = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username : document.getElementById("username").value,
        mobile : document.getElementById("mobile").value,
        description : document.getElementById("description").value        
    }
// console.log(form_data)
    form_data = JSON.stringify(form_data)

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register" , {
        method : "POST",
        body : form_data,
        // mode:""
        headers : {
            "Content-Type": "application/json",
        },
    } )
    // console.log(form_data)

    let data = await res.json()
    console.log(data)
}
document.getElementById("submit").addEventListener("click",register)
