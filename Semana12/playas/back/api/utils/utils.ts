const jwt = require('jsonwebtoken');

export const verificarToken = (token: any) => { 
    try {
        let data = jwt.verify(token, 'sassspe', { algorithm: 'RS256' });
        return data;
    } catch (err) {
        console.log(err.message);
        return null;
    }
}   
