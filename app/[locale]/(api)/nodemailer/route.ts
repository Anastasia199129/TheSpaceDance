import { createSendGrMsg } from '@/helpers/createSendGrMsg'

const sgMail = require('@sendgrid/mail')

const API_KEY = process.env.API_KEY_SENDGRID

sgMail.setApiKey(API_KEY)

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log({ data })

    if (data) {
      const msg = await createSendGrMsg(data)

      if (msg) {
        const d = sgMail.send(msg)
        return NextResponse.json({ data: data }, { status: 201 })
      }
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error!!!!' },
      { status: 500 }
    )
  }
}
