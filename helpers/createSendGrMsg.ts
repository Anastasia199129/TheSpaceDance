interface Props {
  name: string
  surname: string
  number: string
  email: string
  nachricht: string
}

export const createSendGrMsg = ({
  name,
  surname,
  number,
  email,
  nachricht,
}: Props) => {
  console.log('here', name, surname, nachricht, email, number)

  return {
    to: 'nastasia199126@gmail.com',
    from: 'thespacedancemlg@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: `Name: ${name}, Email: ${email}, Number: ${number}, Message: ${nachricht}`,
    html: `<h1>Name</h1>
      <p>${name}</p>
      <h1>Surname</h1>
      <p>${surname}</p>
      <h1>Email</h1>
      <p>${email}</p>
      <h1>Number</h1>
      <p>${number}</p>
      <h1>Coment</h1>
      <p>${nachricht}</p>`,
  }
}
