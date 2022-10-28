import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let id;


let myData = async () => {

    try {
        // let x= document.getElementById("searchreceipe").value;
//    console.log(x)

   let res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=`)
   let data = await res.json()
   data = data.meals
   return data
//    console.log(data)
//    appendata (data)
    }
    catch(err) {
        console.log(err)
    }
   

}

// myData()

let appendata = (data) => {

    if (data === undefined) {
        return false;
    }
    document.getElementById("display").innerHTML = null
console.log(data)
    data.forEach(({strMeal,strInstructions,strMealThumb}) => {

        let div = document.createElement("div")
        div.setAttribute("id","box")
       
        let img = document.createElement("img")
        img.src = strMealThumb
        img.setAttribute("id","pic")

        let p = document.createElement("p")

        p.innerText=strInstructions

        let h1 = document.createElement("h2")

        h1.innerText = strMeal

        div.append(img,h1,p)
        document.getElementById("display").append(div)
    });

}


async function main() {

    let data = await myData();
    console.log(data)

    if (data === undefined) {
        return false;
    }

    appendata(data)

}

function debounce (func,delay) {

    if (id) {
        clearTimeout(id)
    }

    id = setTimeout(function () { 
        func();
    },delay)

}

function show () {
    debounce(main,1000)
}

show()
// document.getElementById("searchreceipe").addEventListener("input",show)