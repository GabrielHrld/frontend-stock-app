import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

import SpinnerLoading from '../components/SpinnerLoading';

const chartData = [];
const chartXTags = [];

const ChartContainer = ({ url, handleFetch }) => {
  const [data, setData] = useState(chartData.reverse());
  const [xTags, setXTags] = useState(chartXTags.reverse());
  const [hasData, setHasData] = useState(null);

  const [loading, setLoading] = useState(false);

  console.log('renderiza');

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Stocks',
    },
    series: [
      {
        name: 'precio',
        data: data || [],
      },
    ],
    xAxis: {
      title: {
        text: 'Intervalo',
      },
      allowDecimals: true,
      categories: xTags,
    },
    yAxis: {
      title: {
        text: 'Cotización',
      },
    },
  };

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const res = await axios.get(`${url}`);
        if (res.data.values.length > 0) {
          setHasData(true);
          res.data.values.map((element) => {
            chartData.push(parseFloat(element.close));
            chartXTags.push(element.datetime.slice(11, 19));
          });
        } else {
          setHasData(false);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchApi();
  }, [handleFetch]);

  return (
    <ChartWrapper>
      {loading ? (
        <SpinnerLoading />
      ) : hasData ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <h2>La acción que usted busca no se encuentra registrada.</h2>
      )}
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  margin: 2rem auto;
  width: 80%;
  min-height: 300px;
`;

export default ChartContainer;
