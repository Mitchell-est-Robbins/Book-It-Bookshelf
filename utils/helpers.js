module.exports = {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  };


  module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
  };

  // ADD ITEM TO LOCAL STORAGE
  window.localStorage.setItem('item', JSON.stringify(itemName));



/*
* #---------------------------------------#
* #            Start Test                 #
* #---------------------------------------#
*/
  const person = {
    name: "Obaseki Nosa",
    location: "Lagos",
}
window.localStorage.setItem('user', JSON.stringify(person));
/*
* #---------------------------------------#
* #            End Test                   #
* #---------------------------------------#
*/

