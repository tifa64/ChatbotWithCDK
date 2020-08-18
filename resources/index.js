const Eliza = require('eliza-as-promised');

exports.hello_world = async event => {
  const eliza = new Eliza();
  const response = await eliza.getResponse(event.path.substring(1));
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({'You': decodeURI(event.path.substring(1)), 'ELIZA': decodeURI(response.reply)})
  };
};