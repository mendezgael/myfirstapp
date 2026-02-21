import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import express from 'express';

@Controller('hello')
export class HelloController {

    @Get('/')
    index(@Req() request: express.Request, @Res() response: express.Response) {
        response.status(200).json({
            message: 'Hello, World!'
        });
    }

    @Get('new')
    @HttpCode(201)
    somethingNew(){
        return 'Something New'
    }

    
    @Get('notFound')
    @HttpCode(404)
    notFoundPage(){
        return '404 Not Found'
    }

    
    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'Error Route!'
    }

}