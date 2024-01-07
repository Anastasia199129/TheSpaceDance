import { createSendGrMsg } from '@/helpers/createSendGrMsg'

const sgMail = require('@sendgrid/mail')

const API_KEY = process.env.API_KEY_SENDGRID

sgMail.setApiKey(API_KEY)

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    if (data) {
      console.log({ 'data!!': data })

      const msg = createSendGrMsg(data)
      console.log( {msg});
      
      if (msg) {
        const d = await sgMail.send(msg)
        console.log('itshere', { d })
        return NextResponse.json({ data: data }, { status: 201 })
      }
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error!!!!' },
      { status: 500 }
    )
    // return res.status(500).json({ error: error })
  }
}
