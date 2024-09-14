
export async function getProduct(id) {
    // Logic to get the product details from the DB
    const products = [
        {id: 1, name: 'Product', price: 10},
        {id: 2, name: 'Product', price: 20},
        {id: 3, name: 'Product', price: 30}
    ];
    return products.find(product => product.id === id);
}


