import type { NextRequest } from "next/server";
import type { KVNamespace } from '@cloudflare/workers-types';
import { token } from "@/app/token";

export const runtime = 'edge';

const { CURRENCIES } = (process.env as any as { CURRENCIES: KVNamespace });

export const POST = async (request: NextRequest) => {

    const authHeader = request.headers.get('Authorization');
    const reqToken = authHeader?.split(' ')[1];
    if (reqToken === token) {
        const kv = await CURRENCIES.get('rates');
    
        if (kv) {
            return new Response(kv)
        }
        return new Response(JSON.stringify({ error: 'Rates not found' }))
    }
    return new Response(JSON.stringify({ error: 'Unauthorized' }))

};
