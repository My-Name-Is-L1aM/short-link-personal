const Users = require("../../models/users");

const { getBody } = require('../../utils');

async function POST(req, res) {
  console.log("registration");
  const body = await getBody(req);
  // const user = new Users({ email: body.email, password: body.password })
  // const users = await Users.create({ email: body.email, password: body.password })

  console.log({ body });
  res.end("check");
}

module.exports = { POST };