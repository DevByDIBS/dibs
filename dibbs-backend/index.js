const Express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

var admin = require("firebase-admin");

require('dotenv').config();

var serviceAccount = require("./dibbSAK.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const config = {
    authorizationParams: {
        response_type: 'code'
    }};


const app = Express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/', async (req, res) => {
    let { token_type, access_token, isExpired, refresh } = req.oidc.accessToken;
    let user = req.oidc.user;
    const uid = user.sub.split("|");

    getAuth()
    .createCustomToken(uid)
    .then((customToken) => {
        res.send(customToken);
    })
    .catch((error) => {
        console.log('Error creating custom token:', error);
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

