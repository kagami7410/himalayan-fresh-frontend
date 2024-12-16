import { NextResponse } from 'next/server';


export async function GET() {
    const backendHostName = process.env.HIMALAYAN_COFFEE_BACKEND_HOSTNAME

    try{
        console.log(`trying to getAll the beans`)

        const res = await fetch(`${backendHostName}/backend/items/getAll`);
        const data = await res.json();
        console.log(data)
        return NextResponse.json(data, { status: 200 });
    }
    catch(error) {
        return NextResponse.json({ error: 'Failed to get request' }, { status: 500 });
    }


}