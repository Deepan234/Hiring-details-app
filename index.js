const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/index');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // Enable GraphiQL IDE for development
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});