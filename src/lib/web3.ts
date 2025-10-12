import { ethers } from "ethers";


export function getRpcProvider() {
    return new ethers.providers.JsonRpcProvider(import.meta.env.VITE_BLOCK_DAG_RPC)
}

export function getInjectedProvider() {
    const provider = (window as any).ethereum;
    if (!provider) throw new Error("MetaMask not installed");
    return new ethers.providers.Web3Provider(provider);
}

