const axios = require('axios');

class CepController  {
  async index(request, response){
    const { body } = request;

    const perCapita = body.income/body.dependents;

    try{
      const { data } = await axios(`https://viacep.com.br/ws/${body.cep}/json/`);
      const responseObj = {
        name: body?.name,
        cepData: data,
        perCapita: perCapita.toFixed(2)
      }
      response.send(responseObj);
      
    }catch{
      return response.json({ error: 'Falha na busca do endereço. Confira o CEP.' })
    }
  }
}

module.exports = new CepController();