import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

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

  console.log(dateTime);

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

  useEffect(() => {
    let url = '';
    if (period == realtime) {
      const date = moment().format('YYYY-MM-DD HH:mm:ss');
      url = `https://api.twelvedata.com/time_series?symbol=${stock}&country=united%20states&interval=${intervalStock}&end_date=${date}&apikey=45b71968aaeb44e3acc9ff43b1d52d67`;

      //cuando esté en realtime vuelve a renderizar el componente y llamar a la API
      setTimeout(() => {
        setHandleFetch(!handleFetch);
      }, intervalInMiliseconds);
    }

    if (period == historical) {
      url = `https://api.twelvedata.com/time_series?symbol=${stock}&country=united%20states&interval=${intervalStock}&start_date=${dateTime.start_date}&end_date=${dateTime.end_date}&apikey=45b71968aaeb44e3acc9ff43b1d52d67`;
    }

    const fetchData = () => {
      axios
        .get(url)
        .then((res) => console.log(res.data))
        .catch((error) => {
          if (error.code == 400) history.push('/notfound');
          console.log(error);
        });
    };
    fetchData();
  }, [handleFetch]);

  return (
    <DetailsWrapper>
      <DetailsContainer>
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
        <div
          style={{ display: 'flex', width: '50%', justifyContent: 'flex-end' }}
        >
          <Button onClick={reFetch}>Graficar</Button>
        </div>
      </DetailsContainer>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  width: 100%;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Details;
