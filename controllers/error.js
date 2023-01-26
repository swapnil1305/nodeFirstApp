const path = require('path');
const express = require('express');

exports.get404 = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
};