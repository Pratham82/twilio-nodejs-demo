require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const phoneNumber = process.env.PHONE_NUMBER
const receiver = process.env.RECEIVER_NUMBER
const client = require('twilio')(accountSid, authToken)

const sendMessage = () =>
  client.messages
    .create({
      body: 'This is test Message sent from TWILIO',
      from: phoneNumber,
      to: receiver,
    })
    .then(message => console.log(message.sid, `Message sent to ${receiver}`))

sendMessage()
