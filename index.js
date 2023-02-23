const url ="https://www.themealdb.com/api/json/v1/1/categories.php";

let x = fetch(url)  
x.then((value1)=>{
    console.log(value1.status);
    console.log(value1.ok);
    return value1.json();
}).then((value2)=>{
    console.log(value2.status);
    console.log(value2.ok);
    console.log(value2.categories)
    value2.categories.forEach(element => {
        console.log(element);
        //Created a parent div 
        const parent = document.getElementById("data-grid")
        console.log(parent);
//1
        //heading for each element
        const heading = document.createElement("h1")        
        heading.innerHTML = element.strCategory
        console.log(heading)
        
        //appending heading to the parent class
        parent.appendChild(heading)
//2
        //creating img src tag
        const imgSrc = document.createElement("img")

        //setting up the source 
        imgSrc.src = element.strCategoryThumb;

        //append
        parent.appendChild(imgSrc);
//3 
        //description
        const des = document.createElement("p")
        des.innerHTML = element.strCategoryDescription

        //append
       parent.appendChild(des)
    });
})