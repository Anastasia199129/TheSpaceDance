import { createSendGrMsg } from '@/helpers/createSendGrMsg'

import type { NextApiRequest, NextApiResponse } from 'next'

const sgMail = require('@sendgrid/mail')

const API_KEY = process.env.API_KEY_SENDGRID

sgMail.setApiKey(API_KEY)

// const handler = async (
//   req: NextApiRequest,
//   res:NextApiResponse
// ) => {
//   try {
//     if (req.method === 'POST') {
//       const data = req.body
//       if (!data?.name || !data.email || !data.surname ) {
//         return res.status(400).json({ message: 'Bad request' })
//       }
//       const msg = createSendGrMsg(data)
//       await sgMail.send(msg)
//       return res.status(200).json(msg)
//     }
//   } catch (error) {
//     return res.status(500).json({ error: error })
//   }
// }
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// export default handler
export async function POST(request: Request, responce: any) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  const data = await request.json()
  console.log({ data })

  // return Response.json({ res })

  try {
    // if (req.method === 'POST') {
    //   const data = req.body
    // if (!data?.name || !data.email || !data.surname) {
    // return res.status(400).json({ message: 'Bad request' })
    // }
    const msg = createSendGrMsg(data)
    await sgMail.send(msg)
    // return responce.status(200).json(msg)
    return NextResponse.json({ data: data }, { status: 201 })

    // }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error!!!!' },
      { status: 500 }
    )
    // return res.status(500).json({ error: error })
  }
}
