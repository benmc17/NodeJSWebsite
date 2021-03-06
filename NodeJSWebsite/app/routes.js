﻿'use strict';
var express = require('express');

var router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.get('/about', function (req, res) {
    res.render('pages/about');
});

router.get('/contact', function (req, res) {
    res.render('pages/contact');
});

router.post('/contact', function (req, res) {
    res.send({
        name: req.body.name,
        success: true
    });
});