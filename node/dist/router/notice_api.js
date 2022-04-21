"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// var express = require('express');
// var router = express.Router();
// const db = require("../dbconnect");
router.get('/', (request, response, next) => {
    let parser = request.body;
});
module.exports = router;
