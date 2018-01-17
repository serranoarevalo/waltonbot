const { twilioSid, twilioAuthToken, twilioNumber } = require("../keys");
// Creating Twilio Client
const client = require("twilio")(twilioSid, twilioAuthToken);

function send(name, list) {
  // Send a message to each of the people on the list
  list.forEach(person => {
    // Message template
    const template = `Hola ${
      person.name
    } 👋🏻👋🏻\nTe queremos recordar que hoy es el cumpleaños de ${name} 🎉🎉\nAtentamente: Los Walton😘`;
    // Send message
    client.messages
      .create({
        to: person.number,
        from: twilioNumber,
        body: template
      })
      .then(message => console.log(message))
      .catch(err => console.log(err));
  });
}
module.exports = send;
