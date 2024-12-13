import { NextResponse } from 'next/server';


export async function GET() {
    const backendHostName = process.env.SQUID_CORAL_BACKEND_HOSTNAME

    try{
        const res = await fetch(`${backendHostName}/backend/items/getAll`);
        const data = await res.json();
        console.log(data)
        return NextResponse.json(data, { status: 200 });
    }
    catch(error) {
        return NextResponse.json({ error: 'Failed to get request' }, { status: 500 });
    }


}