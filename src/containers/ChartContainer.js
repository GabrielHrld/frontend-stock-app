import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

import SpinnerLoading from '../components/SpinnerLoading';

const chartData = [];
const chartXTags = [];

const noDataInSpecifiedDates =
  'No data is available on the specified dates. Try setting different start/end dates.';

const ChartContainer = ({ url, handleFetch }) => {
  const [data, setData] = useState(chartData.reverse());
  const [xTags, setXTags] = useState(chartXTags.reverse());
  const [hasData, setHasData] = useState(null);

  const [specifiedData, setSpecifiedData] = useState(false);

  const [loading, setLoading] = useState(false);

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
        }
        if (res.data.message.includes(noDataInSpecifiedDates)) {
          setSpecifiedData(true);
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
      ) : specifiedData ? (
        <h2>
          No se encontraron los datos solicitados para la acción. Intente
          probando otro periodo
        </h2>
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
