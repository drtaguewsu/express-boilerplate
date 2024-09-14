
export async function getProduct(id) {
    // Logic to get the product details from the DB
    const products = [
        {id: id, name: 'Product', price: 10},
        {id: id, name: 'Product', price: 20},
        {id: id, name: 'Product', price: 30}
    ];
    return products.find(product => product.id === id);
}


