import { Controller, Get, Req, Res } from '@nestjs/common';
import express from 'express';

@Controller('hello')
export class HelloController {

    @Get('/')
    index(@Req() request: express.Request, @Res() response: express.Response) {
        response.status(200).json({
            message: 'Hello, World!'
        });
    }
}