import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.accSid
const authToken = process.env.authToken

const client = twilio(accountSid, authToken)

try {
   const message = await client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: process.env.twilioNumber,
      to: process.env.toNumber
   })
   console.log(message)
} catch (error) {
   console.log(error)
}
