class Product {
    // title = 'DEFAULT';
    // imageUrl;    
    // description;
    // price;

    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product
    }

    render() {
         const prodEl = document.createElement('li');
         prodEl.className = 'product-item';
         prodEl.innerHTML = `
                <div>
                    <img src='${this.product.imageUrl}' alt='${this.product.description}'>
                    <div class='product-item__content'>
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            `;
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow', 
            'http://tiny.cc/en48vz', 
            'A Soft Pillow', 
            19.99
        ),
        new Product(
            'A Rug', 
            'http://tiny.cc/co48vz',
            'We Buid To Your Design',
            89.99
        )
    ];
    constructor() {}
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
           const productItem = new ProductItem(prod)
           const prodEl = productItem.render()
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}


const productList = new ProductList
productList.render()