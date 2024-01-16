interface User {
  name: string
  surname: string
  email: string
  number: string
  coment: string
}

export const handleCreateUser = async ({
  name,
  surname,
  email,
  number,
  coment,
}: User) => {
  try {
    const userInput = {
      input: {
        username: name,
        surname: surname,
        email: email,
        number: number.toString(),
        coment: coment,
      },
    }

    const res = await fetch('/addNewClient', {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    if (res.statusText === 'Created') {
      return res
    } else {
      throw new Error('Error, user not created!!!')
    }
  } catch (err) {
    console.error(err)
  }
}
