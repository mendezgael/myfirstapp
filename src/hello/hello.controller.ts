import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import express from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number){
        return num + 14;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean){
        console.log(typeof status);
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
        return `Hello ${query.name}, you are ${query.age} years old!`;
    }

}