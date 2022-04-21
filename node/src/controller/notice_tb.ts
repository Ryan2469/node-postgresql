import console from 'console';
import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();
const db = require("../dbconnect");

/**
 * @get
 */

router.get('/', async (request:Request, response:Response, next: NextFunction) => { 
    let parser = request.body;

    const query = `select * from notice_tb`;

    try {
        const noticedb = await db.query(query);
        response.status(200).send({
            'data' : noticedb
        })
    } catch (error) {
        console.error(error);
        response.status(500).send({
            'error' : error
        })
    }
})

/**
 * @post
 */

router.post('/', (request:Request, response:Response, next: NextFunction) => { 
    let parser = request.body;
})

/**
 * @delete
 */

router.delete('/', (request:Request, response:Response, next: NextFunction) => { 
    let parser = request.body;
})

/**
 * @put
 */

router.put('/', (request:Request, response:Response, next: NextFunction) => { 
    let parser = request.body;
})

module.exports = router;
