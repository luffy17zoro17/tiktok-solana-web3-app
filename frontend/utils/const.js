
import {clusterApiUrl, PublicKey} from "@solana/web3.js";
import tiktok from './tiktok.json';

export const SOLANA_HOST = clusterApiUrl('devnet'); 

export const TIKTOK_PROGRAM_ID = new PublicKey("GsGupgEiS7fL9E7U7GgQ2fnU9aTafdsV935yhZVAzzdw");


export const TIKTOK_IDL = tiktok;


