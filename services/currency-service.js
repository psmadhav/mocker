module.exports = [
    {
        route:'/currency/v2/symbols/:name',
		method:'get',
		handler:(req, res) => {
            res.send({
                "name":req.name,
                "fromCurrency":{
                    id:"101",
                    precision: 2,
                    "code":"USD",
                    "type":"fiat",
                },
                "toCurrency":{
                    "code":"PUSD",
                    "precision":2,
                    "id":"452247896928944130",
                    "type":"asset",
                    "fiatid":"101"
                },
                "ratio":"1.5"
            })
        }
    },
    {
        route:'/currency/v2/currencies/:assetid',
		method:'get',
		handler:(req, res) => {
            res.send({
                "code":"PUSD",
                "precision":2,
                "id":"452247896928944130",
                "type":"asset",
                "fiatid":"101"
            })
        }
    }
]
