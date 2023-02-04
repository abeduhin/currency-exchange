import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.apilayer.com/currency_data",
    headers: {
        apikey: "ETtLmh9dT425sgZI3QzuFTxFQb6S3QjL"
    }
})

export const getConvert = async({ to, from, amount }) => {
    const {data} = await instance.get("/convert", {
        params: {
            to,
            from,
            amount
        }
    })
    return data;
}

export const getRecentExchange = async(source) => {
    const {data} = await instance.get("/live", {
        params: {
            source,
            currencies: 'EUR%2CUSD%2CUAH%2CPLN%2CGBP%2CHF%2CTRY',
        }
    })
    return data;
}