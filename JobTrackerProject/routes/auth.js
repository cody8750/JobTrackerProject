
//get api/auth token access private
//get user by token
const express = require('express');
const router = require('router');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const user = require('../models/user');
const job = require('../models/job');

router.get('/', auth, async (req, res) => {
    try {
        const user = await user.findById(req.user.id).select('password');
        res.json(user);
    } catch (error) {
        console.error.message
        res.status(500).send("server error")
    }
})