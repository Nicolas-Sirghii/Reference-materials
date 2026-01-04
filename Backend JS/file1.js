//"GET", "https:/supersimplebackend.dev/products"


 export function renderProducts(products) {
  const container = document.querySelector('.container');

  container.innerHTML = products.map(product => {
    const price = (product.priceCents / 100).toFixed(2);

    return `
      <div class="card">  
        <h3>${product.name}</h3>
        
        <div class="rating">
          ⭐ ${product.rating.stars} 
          <span>(${product.rating.count})</span>
        </div>
        
        <p class="price">$${price}</p>
        
        <div class="keywords">
          ${product.keywords.map(k => `<span>${k}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}


const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
    renderProducts(JSON.parse(xhr.response))
    
})

xhr.open("GET", "https:/supersimplebackend.dev/products");
xhr.send();


