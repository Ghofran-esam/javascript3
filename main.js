async function getProducts(){
    const response =await fetch("https://dummyjson.com/products");
    const data=await response.json();
    const products = data.products;
    const result=products.map(function(ele){
        return ` <div class="product">
        <h1>${ele.title}</h1>
        <p class="price">${ele.price}</p>
        <img src = "${ele.thumbnail}"/>

        </div>
    
        `;
    }).join('');;
    document.querySelector(".products").innerHTML=result;
}
getProducts();