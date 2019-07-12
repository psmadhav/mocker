const express = require('express')
const morgan = require('morgan')
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const app = express()
const port = 9998

app.use(bodyParser.json());
morganBody(app);

const mockedRoutes = require('./routes')
for(var i=0;i<mockedRoutes.length;++i) {
	let r = mockedRoutes[i]
	if(r.handler) {
		app[r.method](r.route, (req, res) => {
			r.handler(req, res)
		})
		console.log(`Registed: ${r.method +' ' + r.route} with handler`)
	} else if(r.value){
		app[r.method](r.route, (req, res) => res.send(r.value))
		console.log(`Registed: ${r.method +' '+ r.route} with value: ${r.value}`)
	}
}

app.listen(port, () => console.log(`mocker URL: http://localhost:${port}`))
