const { dates, people } = require("../data");
const send = require("./send");
function check() {
  // Get the current date
  const CURRENT_DATE = "04-11";
  // Select the people inside of it
  const selected = dates[CURRENT_DATE];
  // If there are people selected
  if (selected) {
    selected.forEach(bperson => {
      // Exclude the selected one from the people array
      const excluded = people.filter(person => person.name !== bperson);
      // Call the send function
      send(bperson, excluded);
    });
  }
}
module.exports = check;
