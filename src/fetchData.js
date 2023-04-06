export const stockOptions = {
    method: 'GET',
    url: 'https://twelve-data1.p.rapidapi.com/cryptocurrencies',
    params: {currency_base: 'BTC', format: 'json'},
    headers: {
      'X-RapidAPI-Key': '00fb27159dmsh80a9fd9f86f4bf6p164394jsn6cbec6d80af1',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    }
}

export const fetchData = async(url, options) =>{
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}