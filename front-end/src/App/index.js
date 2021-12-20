import { useState } from 'react';
import api from '../services/api';
import formatCep from '../utils/formatCep';
import FormGroup from '../components/FormGroup';
import Input from '../components/Input';
import {
  Container, Button, Title, InputContainer,
} from './styles';
import GlobalStyles from '../global';
import Card from '../components/Card';
import { Spinner, SpinnerContainer } from '../components/Loader';

const App = function () {
  const [name, setName] = useState('');
  const [cep, setCep] = useState('');
  const [income, setIncome] = useState('');
  const [dependents, setDependents] = useState('');
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState([]);
  const [triggered, setTriggered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isFormValid = cep.length > 0 && income.length > 0 && dependents.length > 0;

  function convertToArray(obj) {
    const array = [obj];
    return array;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name, cep, income, dependents,
    };

    setIsLoading(true);
    await api.post('/cep', data).then((response) => {
      const dataReceived = convertToArray(response.data);
      setUserData(dataReceived);
      setTriggered(true);
      setIsLoading(false);
    });
  }
  function handleCepChange(event) {
    setCep(formatCep(event.target.value));

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'cep', message: 'CEP é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'cep',
      ));
    }
  }
  function handleIncomeChange(event) {
    setIncome(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'income', message: 'Renda mensal é obrigatória.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'income',
      ));
    }
  }
  function handleDependentsChange(event) {
    setDependents(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'dependents', message: 'Número de dependentes é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'dependents',
      ));
    }
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return (
    <Container>
      <GlobalStyles />
      <Title>
        <h1>Kukac</h1>

        <p>Cálculo de renda per capita e busca de endereço</p>

      </Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormGroup error={getErrorMessageByFieldName('cep')}>
          <Input
            type="text"
            name="cep"
            placeholder="CEP"
            maxLength={8}
            value={cep}
            onChange={handleCepChange}
            error={getErrorMessageByFieldName('cep')}
          />
        </FormGroup>
        <InputContainer>
          <FormGroup error={getErrorMessageByFieldName('income')}>
            <Input
              type="number"
              min="0"
              name="renda"
              placeholder="Renda mensal"
              value={income}
              onChange={handleIncomeChange}
              error={getErrorMessageByFieldName('income')}
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('dependents')}>
            <Input
              type="number"
              min="0"
              name="dependentes"
              placeholder="Nº de dependentes"
              value={dependents}
              onChange={handleDependentsChange}
              error={getErrorMessageByFieldName('dependents')}
            />
          </FormGroup>
        </InputContainer>

        <Button
          type="submit"
          disabled={!isFormValid}
        >
          Pesquisar
        </Button>
      </form>

      {isLoading && <SpinnerContainer><Spinner /></SpinnerContainer>}

      {(triggered && !isLoading)
        && <Card userData={userData} />}
    </Container>
  );
};

export default App;
