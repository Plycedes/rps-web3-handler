import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

export async function broadcastSignedTransaction(rawTx) {
    const txResponse = await provider.broadcastTransaction(rawTx);
    await txResponse.wait();
    return txResponse;
}
