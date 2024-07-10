import express from "express";
import helmet from 'helmet';
import morgan from "morgan";

const app = express();
const PORT = 3001;

// express 세팅
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

// router 세팅
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 서버 실행
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})