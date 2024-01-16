import { NextResponse } from 'next/server'
import { getClient } from '@/lib/client'
import { CREATE_USER_MUTATION } from '@/lib/gql/graphql'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (data) {
      const mutationResult = await getClient().mutate({
        mutation: CREATE_USER_MUTATION,
        variables: { input: { ...data.input } },
      })

      return NextResponse.json({ data: mutationResult.data }, { status: 201 })
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error!!!!' },
      { status: 500 }
    )
  }
}
