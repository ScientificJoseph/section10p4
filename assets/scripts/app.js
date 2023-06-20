class Product {
    // title = 'DEFAULT';
    // imageUrl;    
    // description;
    // price;

    constructor(title, image, desc, price){ //creates and initializes an object instance of a class
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) { // receives product objects from product array 
        this.product = product // assigns object received to product property as a value
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
        new Product( // calls product class constructor and passes arguments to constructor instantiate
            'A Pillow', 
            'http://tiny.cc/en48vz', 
            'A Soft Pillow', 
            19.99
        ),
        new Product( // calss product class constructor and passes arguments ro constructor 
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
        for (const prod of this.products) { //iterates through the objects in products array and stors objects in prod
           const productItem = new ProductItem(prod) // calls ProductItem and passes prod objects as arguments to ProductItem
           const prodEl = productItem.render() //calls render method which builds and returns HTML formated list of products
           prodList.append(prodEl); //appends list item to ul
        }
        renderHook.append(prodList); //appends ul to div
    }
}


const productList = new ProductList 
productList.render()