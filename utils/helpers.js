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


const person = {
  name: "Obaseki Nosa",
  location: "Lagos",
}
window.localStorage.setItem('user', JSON.stringify(person));



router.post('/', withAuth, async (req, res) => {
try {
  const newComment = await Comment.create({
    ...req.body,
    userId: req.session.userId,
  });
  res.json(newComment);
} catch (err) {
  res.status(500).json(err);
}
});
