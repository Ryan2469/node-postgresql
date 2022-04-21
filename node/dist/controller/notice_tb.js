"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const db = require("../dbconnect");
/**
 * @get
 */
router.get('/', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let parser = request.body;
    const query = `select * from notice_tb`;
    try {
        const noticedb = yield db.query(query);
        response.status(200).send({
            'data': noticedb
        });
    }
    catch (error) {
        console_1.default.error(error);
        response.status(500).send({
            'error': error
        });
    }
}));
/**
 * @post
 */
router.post('/', (request, response, next) => {
    let parser = request.body;
});
/**
 * @delete
 */
router.delete('/', (request, response, next) => {
    let parser = request.body;
});
/**
 * @put
 */
router.put('/', (request, response, next) => {
    let parser = request.body;
});
module.exports = router;
