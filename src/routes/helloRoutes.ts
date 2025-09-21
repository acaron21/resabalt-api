import { Router } from "express";
import {sayHello} from "../controllers/helloController"

const router = Router();

// test with "Hello"
router.post("/", sayHello)

export default router;