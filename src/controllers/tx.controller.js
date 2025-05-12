import { broadcastSignedTransaction } from "../services/tx.service.js";

export const broadcastTransaction = async (req, res) => {
    const { rawTransaction } = req.body;

    if (!rawTransaction) {
        return res.status(400).json({ error: "Missing rawTransaction" });
    }

    try {
        const txResponse = await broadcastSignedTransaction(rawTransaction);
        res.json({ status: "broadcasted", txHash: txResponse.hash });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
