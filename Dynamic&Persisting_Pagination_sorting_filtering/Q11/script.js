
    document.getElementById("filter").addEventListener('change',()=>{
    let data=document.getElementById("filter").value
       fetchData(data)
 
})

function fetchData(query)
{
    // console.log(query)
    let list=document.getElementById('list')
    list.innerHTML=""

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>{
        
        users.forEach(x=> {
            let p=document.createElement('p')
            p.className="value"
            p.innerHTML=x[query]
        list.appendChild(p)
        });
    })
}
fetchData("name")