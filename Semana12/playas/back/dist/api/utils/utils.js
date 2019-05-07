"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
exports.verificarToken = (token) => {
    try {
        let data = jwt.verify(token, 'sassspe', { algorithm: 'RS256' });
        return data;
    }
    catch (err) {
        console.log(err.message);
        return null;
    }
};
