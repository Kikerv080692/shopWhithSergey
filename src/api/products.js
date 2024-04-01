
const _Url = 'https://fakestoreapi.com'



// export  const getAllCharacters = async () => {
//     fetch(`${_Url}?apikey=${apiKey}?privatekey=${apiPrivateKey}`)
//         .then(response => console.log(response))
//
// }

export  const getAllProducts = async () => {
    const response = await fetch(`${_Url}/products`)
    const data = await response.json()

    return data
}