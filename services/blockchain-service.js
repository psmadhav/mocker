
function makeid(length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }

module.exports = [
	{
		route:'/blockchain/v1/mint',
		method:'post',
		handler:(req, res) => {
			res.send({
				"referenceID": "442049528438783900",
			    	"status": {
					"type": "failed",
					"errorCode": 2009,
					"reason": "Insufficient balance"
			    	}
			})
		} 
	},
	{
		route:'/blockchain/v1/accounts/:accountid/trustline',
		method:'post',
		handler:(req,res)=>{ res.send("") }
	},
	{
		route:'/blockchain/v1/accounts',
		method:'post',
		handler:(req, res) => {
			res.send({"publicKey": req.accountid})
		}
	},
	{
		route:'/blockchain/v1/accounts/key',
		method:'post',
		value:{
			"publicKey": makeid(56)
		}
	},
	{
		route:'/blockchain/v1/transfer',
                method:'post',
                value:{
		    "referenceID": "442049528438783900",
		    "status": {
			"type": "success"
		    }
		}
	}
]
