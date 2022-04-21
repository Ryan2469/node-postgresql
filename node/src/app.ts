import express, {Request, Response, NextFunction} from 'express';
const app = express();

import * as noticeController from './controller/notice_tb'

app.set('/notice',noticeController);

