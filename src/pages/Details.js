import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

import { config } from '../utils/config';

import ChartContainer from '../containers/ChartContainer';
import Inputs from '../components/Inputs';
import DateTimeContainer from '../components/DateTimeContainer';
import { Button } from '../components/Button';

const Details = () => {
  const history = useHistory();
  const [realtime, setRealTime] = useState('realtime');
  const [historical, setHistorical] = useState('historical');
  const [intervalStock, setIntervalStock] = useState('1min');
  const [dateTime, setDateTime] = useState({ start_date: '', end_date: '' });
  const [period, setPeriod] = useState(realtime);
  const [handleFetch, setHandleFetch] = useState(false);

  const { stock } = useParams();

  let intervalInMiliseconds;
  if (intervalStock == '1min') intervalInMiliseconds = 60000;
  if (intervalStock == '5min') intervalInMiliseconds = 300000;
  if (intervalStock == '15min') intervalInMiliseconds = 900000;

  const reFetch = (e) => {
    e.preventDefault();
    setHandleFetch(!handleFetch);
  };

  const handleSelect = (e) => {
    e.preventDefault();

    setIntervalStock(e.target.value);
  };

  let url = '';
  if (period == realtime) {
    //formateo la fecha y hora actual
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    url = `https://api.twelvedata.com/time_series?symbol=${stock}&country=united%20states&interval=${intervalStock}&end_date=${date}&apikey=${config.TwelveDataApiKey}`;

    //cuando esté en realtime vuelve a renderizar el componente y llamar a la API
    setTimeout(() => {
      setHandleFetch(!handleFetch);
    }, intervalInMiliseconds);
  }

  if (period == historical) {
    url = `https://api.twelvedata.com/time_series?symbol=${stock}&country=united%20states&interval=${intervalStock}&start_date=${dateTime.start_date}&end_date=${dateTime.end_date}&apikey=${config.TwelveDataApiKey}`;
  }

  return (
    <DetailsWrapper>
      <DetailsContainer>
        {/* Menu */}

        <MenuContainer>
          <PeriodContainer>
            <Inputs
              type="radio"
              name="period"
              defaultChecked="true"
              id={realtime}
              state={realtime}
              setState={setPeriod}
              label="Tiempo real"
            />
          </PeriodContainer>
          <PeriodContainer>
            <Inputs
              type="radio"
              name="period"
              id={historical}
              state={historical}
              setState={setPeriod}
              label="Histórico"
            />
            <DateTimeContainer
              label="Fecha hora desde"
              type="datetime-local"
              id="start_date"
              state={dateTime}
              setState={setDateTime}
            />
            <DateTimeContainer
              label="Fecha hora hasta"
              type="datetime-local"
              id="end_date"
              state={dateTime}
              setState={setDateTime}
            />
          </PeriodContainer>
          <PeriodContainer>
            <label>Intervalo</label>
            <select
              name=""
              id=""
              defaultValue={intervalStock}
              onChange={handleSelect}
            >
              <option value="1min">1min</option>
              <option value="5min">5min</option>
              <option value="15min">15min</option>
            </select>
          </PeriodContainer>
        </MenuContainer>
        {/* Botón para graficar */}
        <div
          style={{
            display: 'flex',
            width: '50%',
            margin: '0 auto',
            height: '40px',
          }}
        >
          <Button onClick={reFetch}>Graficar</Button>
        </div>
        {/* GRÁFICO */}
        <ChartContainer handleFetch={handleFetch} url={url} />
      </DetailsContainer>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  background: #fefefe;
  width: 80%;
  margin: 0 auto;
`;

const DetailsContainer = styled.div`
  padding: 3rem calc((100vw - 1400px) / 2);
`;

const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const MenuContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Details;
