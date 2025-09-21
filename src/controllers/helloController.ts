import {Request, Response } from "express";

type helloResponse = {
    messsage: string;
}

export const sayHello = (req: Request, res: Response):void => {
    const response: helloResponse = {
        messsage: "Hello World"
    }
    res.json(response)
}