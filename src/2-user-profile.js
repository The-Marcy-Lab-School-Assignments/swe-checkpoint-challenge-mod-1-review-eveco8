// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  let user = {
    username: username,
    email: email,
    isActive : true,
    loginCount : 0
  }
  return user
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  return user.loginCount++
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false
  delete user.email
  return user
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  //return `${Object.keys(user)}: ${Object.values(user)}`
  let key = Object.keys(user)
  let value = Object.values(user)
  for (let i = 0; i < key.length; i++) {
    let newKey = key[i]
    let newValue = user[newKey] 
    console.log(`${newKey}: ${newValue}`)
  }
};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  let copy = {...user}
  return copy
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
