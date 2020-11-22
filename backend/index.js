const cors = require('cors');
const express = require('express');
const stripe = require('stripe')('sk_test_51Hq38uBGZ4H8Vh4vw3LVPLLOmFXpe2virUj409Xgo2GCAZcYtfQ46U3tUuq3AvQ5mFVZ9zqQXxcv0Mcl6Tg3FliB00SZgGxqZ4');
const {v4: uuidv4} = require('uuid');

const app = express();
let transactions = [];


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send(JSON.stringify(transactions));
})

app.get('/user/:id', (req, res) => {

})

app.post('/payment', (req, res) => {
    const {product, token} = req.body;
    console.log("product", product);
    console.log("price", product.price);
    console.log("price", token);
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source:token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'cad',
            customer: customer.id,
            description: product.name
        }, {idempotencyKey})
    })
    .then( result => {
        console.log(result);
        res.status(200).json(result);
        transactions.push(product);
    })
    .catch(err => console.log(err))
})


app.listen(5000, () => console.log('Listening on port 5000'));
