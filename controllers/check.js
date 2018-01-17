const { dates, people } = require("../data");
const send = require("./send");
function check() {
  // Get the current date
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const currentDate = `${month}-${day}`;
  // Select the people inside of it
  const selected = dates[currentDate];
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
