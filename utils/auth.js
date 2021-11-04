const withAuth = (req, res, next) => {
  console.log('withauth');
  console.log(req.session.logged_in);
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');//-------------------------------------may need to change
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  