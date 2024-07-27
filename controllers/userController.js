const db = require("../db/queries");

async function getUsernames(req, res) {
  if (req.query.search) {
    let string = req.query.search;
    console.log(string);
    const usernames = await db.lookForUsernamesWith(string);
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  } else {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  }
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}
async function deleteUsernames(req, res) {
  await db.deleteAllUsernames();
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
};
