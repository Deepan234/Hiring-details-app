const axios = require ('axios');

 async function getHiringDetails(input){
  const response = await axios.get(`https://api.example.com/users/${input.candidateId}`)
  return response
}

module.exports = {getHiringDetails};
