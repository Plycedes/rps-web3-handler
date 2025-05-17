import express from "express";
import txRoutes from "./routes/tx.route.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./env" });

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());

app.use("/", (req, res) => {
    res.send({ statusCode: 200, status: "OK" });
});

app.use("/api/tx", txRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Web3 service running on port ${PORT}`);
});
