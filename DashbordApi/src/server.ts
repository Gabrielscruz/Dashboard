import 'reflect-metadata'
import  express ,{Request, Response , NextFunction}  from "express"
import 'express-async-errors'
import { router } from "./routes";
import './database/index.ts'
import  cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())
app.use(router);
// Middle para tratamento de erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        })
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen(3001,() => console.log('Server is running at http://localhost:3001'));