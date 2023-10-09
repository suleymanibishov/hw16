fetch("db.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    let html =''
    data.products.forEach(product =>{
      html+=  `
        <div class="col-lg-3 custom-box">
        <div class="custom-card">
            <div class="img-div">
                <img src="${pruduct.img}" alt="">
            </div>
            <div class="content">
                <h3 class = "title">${product.name}</h3>
                <h3 class = "price">${product.price}</h3>
            </div>
            <div class="addbasket-btn-div">
                <button class="addbasket">Add to BAsket</button>
            </div>
        </div>
        </div>
        `
    })
    document.querySelector("#Product .container .row").innerHTML=html;
})
