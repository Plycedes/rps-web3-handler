import express from "express";
import txRoutes from "./routes/tx.route.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });

const app = express();

app.use(express.json());
app.use("/api/tx", txRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Web3 service running on port ${PORT}`);
});
