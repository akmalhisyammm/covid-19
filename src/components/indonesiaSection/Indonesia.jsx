import React, { useEffect, useState, Fragment } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Moment from 'react-moment';
import CountUp from 'react-countup';

import { getIndonesiaData } from '../../api';
import Loading from '../Loading';

const Indonesia = () => {
  const [dataTotal, setDataTotal] = useState(null);
  const [dataPenambahan, setDataPenambahan] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const { total, penambahan } = await getIndonesiaData();
      setDataTotal(total);
      setDataPenambahan(penambahan);
    };

    fetchAPI();
  }, []);

  const DataTotal = ({ dataTotal }) => {
    if (!dataTotal) {
      return <Loading />
    }

    const { positif, dirawat, sembuh, meninggal, lastUpdate } = dataTotal;
    return (
      <Fragment>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Positif
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={positif} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Dirawat
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={dirawat} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Sembuh
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={sembuh} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Meninggal
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={meninggal} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body2" gutterBottom>
          Last Update: <Moment date={lastUpdate} format="DD MMMM YYYY HH:mm" />
        </Typography>
      </Fragment>
    );
  };

  const DataPenambahan = ({ dataPenambahan }) => {
    if (!dataPenambahan) {
      return <Loading />
    }

    const { positif, dirawat, sembuh, meninggal, created } = dataPenambahan;
    return (
      <Fragment>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Positif
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={positif} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Dirawat
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={dirawat} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Sembuh
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={sembuh} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card className="Card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Meninggal
                </Typography>
                <Typography variant="h6">
                  <CountUp start={0} end={meninggal} duration={1} separator="." />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body2" gutterBottom>
          Last Update: <Moment date={created} format="DD MMMM YYYY HH:mm" />
        </Typography>
      </Fragment>
    );
  };

  return (
    <div className="Root">
      <Typography variant="h4" gutterBottom>Indonesia Data</Typography>
      <Typography variant="h6" gutterBottom>Total</Typography>
      <DataTotal dataTotal={dataTotal} />
      <Typography variant="h6" style={{marginTop: 16}} gutterBottom>Harian</Typography>
      <DataPenambahan dataPenambahan={dataPenambahan} />
    </div>
  );
};

export default Indonesia;
