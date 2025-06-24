
// adicionar um item
const addItem = async (userCart, item) => {
    userCart.push(item)
}

// deletar um item do carrinho
const deleteItem = async (userCart, itemName) => {
    const index = userCart.findIndex((item) => item.name === itemName)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}


const removeItem = async(userCart, item) => {
    // encontrar o item
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    console.log(indexFound)

    // item não encontrado
    if(indexFound === -1){
        console.log("Item não encontrado")
        return
    }

    // subtrair 1 item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        userCart[indexFound].subtotal = userCart[indexFound].price * userCart[indexFound].quantity 
        return
    }

    // caso seja um

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
        return
    }
}

// calcular total
const calcAll = async (userCart) => {
    const result = userCart.reduce((total, item) => total + item.subtotal, 0)
    console.log(`\n🎁 Total do carrinho: ${result}`)
}

const seeCard = async(userCart) => {
    console.log("\n")
    console.log("Show cart list")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} - ${item.quantity}x | subtotal: ${item.subtotal}`)
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calcAll,
    seeCard,
}