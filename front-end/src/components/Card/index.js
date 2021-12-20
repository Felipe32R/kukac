import PropTypes from 'prop-types';
import { Container, DataField } from './styles';

export default function Card({ userData }) {
  console.log(userData[0]);
  const data = userData[0];

  return (
    data.error ? (
      <p>{data.error}</p>
    ) : (
      <Container>
        {data.name.length > 0 && (
          <DataField>
            <h4>Nome: </h4>
              {data.name}
          </DataField>
        )}
        <DataField>
          <h4>CEP: </h4>
          {data.cepData.cep}
        </DataField>
        <DataField>
          <h4>Logradouro: </h4>
          {data.cepData.logradouro}
        </DataField>
        {data.cepData.complemento.length > 0 && (
          <DataField>
            <h4>Complemento: </h4>
              {data.cepData.complemento}
          </DataField>
        )}
        <DataField>
          <h4>Bairro: </h4>
          {data.cepData.bairro}
        </DataField>
        <DataField>
          <h4>Cidade: </h4>
          {data.cepData.localidade}
        </DataField>
        <DataField>
          <h4>UF: </h4>
          {data.cepData.uf}
        </DataField>
        <DataField>
          <h4>DDD: </h4>
          {data.cepData.ddd}
        </DataField>
        <DataField>
          <h4>IBGE: </h4>
          {data.cepData.ibge}
        </DataField>
        {data.cepData.gia.length > 0 && (
          <DataField>
            <h4>GIA: </h4>
              {data.cepData.gia}
          </DataField>
        )}
        {data.cepData.siafi.length > 0 && (
          <DataField>
            <h4>SIAFI: </h4>
              {data.cepData.siafi}
          </DataField>
        )}
        <DataField>
          <h4>Renda per capita: </h4>
          R$
          {data.perCapita}
        </DataField>
      </Container>
    )
  );
}

Card.propTypes = {
  userData: PropTypes.array,

};
Card.defaultProps = {
  userData: PropTypes.array,
};
