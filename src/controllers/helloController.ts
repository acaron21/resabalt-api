import {Request, Response } from "express";

type helloResponse = {
    message: string;
}

export const sayHello = (req: Request, res: Response):void => {

    // get data from front
    const data = req.body;

    const response: helloResponse = {
        message: `Hello ${data.name}`,
    }
    res.json(response)
}