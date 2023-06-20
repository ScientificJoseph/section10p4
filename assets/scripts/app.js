class Product {
    // title = 'DEFAULT';
    // imageUrl;    
    // description;
    // price;

    constructor(title, image, desc, price){ //on invokation a new object is created 
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ShoppingCart {
    items = []

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total: \$${0.00}</h2>
            <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        return cartEl;
    }
}

class ProductItem {
    constructor(product) { // receives product objects from product array 
        this.product = product // assigns object received to product property as a value
    }

    addToCart() {
        console.log('Adding Product To Cart...')
        console.log(this.product)
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
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this))
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product( // calls product class and passes arguments to constructor instantiate
            'A Pillow', 
            'http://tiny.cc/en48vz', 
            'A Soft Pillow', 
            19.99
        ),
        new Product( // callss product class and passes arguments to constructor 
            'A Rug', 
            'http://tiny.cc/co48vz',
            'We Buid To Your Design',
            89.99
        )
    ];
    constructor() {}
    render() {
        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) { //iterates through the objects in products array and stors objects in prod
           const productItem = new ProductItem(prod) // calls ProductItem and passes prod objects as arguments to ProductItem
           const prodEl = productItem.render() //calls render method which builds from prod objects recieved and returns HTML formated list of products
           prodList.append(prodEl); //appends list item to ul
        }
      return prodList
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        const cart = new ShoppingCart()
        const cartEl = cart.render();
        const productList = new ProductList()
        const prodListEl = productList.render()
        renderHook.append(cartEl); //appends ul to div
        renderHook.append(prodListEl); //appends ul to div
    }
}

const shop = new Shop()
shop.render()

