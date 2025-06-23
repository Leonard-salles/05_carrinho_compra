// criar item com subtotal calculado
const createItem = async(id, name, price, quantity) => {
    return {
        id,
        name,
        price, 
        quantity,
        subtotal: quantity * price
    }
}

export default createItem