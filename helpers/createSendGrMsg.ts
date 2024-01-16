interface Props {
  name: string
  email: string
  surname: string
  number: string
  coment: string
}

export const createSendGrMsg = ({
  name,
  surname,
  number,
  email,
  coment,
}: Props) => {
  console.log('here', name, surname, coment, email, number)

  return {
    to: 'nastasia199126@gmail.com',
    // to: 'escuelajorgesafer@gmail.com',
    from: 'thespacedancemlg@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: `Name: ${name}, Email: ${email}, Number: ${number}, Message: ${coment}`,
    html: `<h1>Name</h1>
      <p>${name}</p>
      <h1>Surname</h1>
      <p>${surname}</p>
      <h1>Email</h1>
      <p>${email}</p>
      <h1>Number</h1>
      <p>${number}</p>
      <h1>Coment</h1>
      <p>${coment}</p>`,
  }
}
