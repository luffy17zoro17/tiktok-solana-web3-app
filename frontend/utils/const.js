
import {clusterApiUrl, PublicKey} from "@solana/web3.js";
import tiktok from './tiktok.json';

export const SOLANA_HOST = clusterApiUrl('devnet'); 

export const TIKTOK_PROGRAM_ID = new PublicKey("HbgKPVq9BCt9cLfHd8ca6jm8hN8hqwYHyVexvt61pKFX");


export const TIKTOK_IDL = tiktok;


