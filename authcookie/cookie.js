const { getToken } = require('../authtoken/token');

const cookie = (user, res) => {
  const token = getToken(user);
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  // 🧠 ✅ Add user's name to a **non-httpOnly** cookie (readable in frontend)
  res
    .cookie('token', token, options)
    .cookie('username', user.name, { maxAge: 3 * 24 * 60 * 60 * 1000 }) // Not httpOnly
    .cookie('roomNo', user.roomId, { maxAge: 3 * 24 * 60 * 60 * 1000 }); // Not httpOnly
};

module.exports = cookie;
