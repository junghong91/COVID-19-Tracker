import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Info = ({
  data: {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
    dailyConfirmed,
    dailyDeaths,
  },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              총 확진{country ? `(${country})` : null}
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            {country ? null : (
              <Typography variant="h6" style={{ color: "tomato" }}>
                (+
                <Countup
                  start={0}
                  end={dailyConfirmed}
                  duration={1.5}
                  separator=","
                />
                )
              </Typography>
            )}

            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active case of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              총 회복{country ? `(${country})` : null}
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              총 사망{country ? `(${country})` : null}
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            {country ? null : (
              <Typography variant="h6" style={{ color: "tomato" }}>
                (+
                <Countup
                  start={0}
                  end={dailyDeaths}
                  duration={1.5}
                  separator=","
                />
                )
              </Typography>
            )}
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of death caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
