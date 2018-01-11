const checkUsername = (user) => {
  return /^[a-zA-Z]+$/.test(user)
}

console.log("username is Just letters: ",  checkUsername("Tommy"));
