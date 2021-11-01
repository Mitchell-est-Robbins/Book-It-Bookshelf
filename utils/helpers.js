module.exports = {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
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