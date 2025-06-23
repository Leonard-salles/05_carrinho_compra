
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

// remover um item
const removeItem = async (userCart, index) => {
   const deleteIndex =  index -1

   if(index >= 0 && index < userCart.length){
    userCart.splice(deleteIndex, 1)
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
    seeCard
}