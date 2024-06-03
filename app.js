    let GetData = (search)=>{
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
        .then(Response=>Response.json())
        .then((res)=>{
            console.log(res.data.recipes); 
            display.innerHTML=""
            const Alldata = res.data.recipes
              Alldata.forEach(element => {
                const display = document.getElementById("display")
                display.innerHTML +=`<div class="card" style="width: 18rem;">
                <img src="${element.image_url}" class="card-img-top" alt="..." id="disimg">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <h5 class="card-title">Publisher : ${element.publisher}</h5>
                  <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Order Now</a>
                </div>
              </div>        
        `    

              });

          }).catch(err=>console.log(err))    
    }

GetData()



function searchResult(){
    const textinp = document.getElementById('textinp')
    const searchValue = textinp.value
    GetData(searchValue)

};

