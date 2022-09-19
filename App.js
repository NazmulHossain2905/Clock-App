import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import Circle from './src/components/Circle';
import Space from './src/components/Space';

import Colors from './src/utils/Colors';

function App() {
  const [time, setTime] = React.useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    amPm: '',
    date: '00',
    month: '00',
    year: '2022',
  });

  const getTime = () => {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // get date
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let amPm = hours < 12 ? 'AM' : 'PM';

    hours = hours > 12 ? hours - 12 : hours;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // date formate
    date = date < 10 ? '0' + date : date;
    month = month < 10 ? '0' + (month + 1) : month;

    // return {
    //   hours,
    //   minutes,
    //   seconds,
    //   amPm,
    //   date,
    //   month,
    //   year,
    // };

    setTime({
      hours,
      minutes,
      seconds,
      amPm,
      date,
      month,
      year,
    });
  };

  React.useEffect(() => {
    setInterval(() => getTime(), 1000);
    // let intervalId = setInterval(() => getTime(), 1000);
    // return () => {
    //   console.log('Exit ------');
    //   clearInterval(intervalId);
    // };
  }, []);

  return (
    <View style={styles.container}>
      <Space height={50} />
      <Text style={styles.text}>Clock</Text>
      <Space height={50} />

      <View style={styles.circleContainer}>
        <Circle
          color={Colors.hours}
          time={time.hours}
          timeTitle="Hours"
          date={time.date}
          dateTitle="Date"
        />
        <Space width={15} />

        <Circle
          color={Colors.minutes}
          time={time.minutes}
          timeTitle="Minutes"
          date={time.month}
          dateTitle="Month"
        />
        <Space width={15} />

        <Circle
          color={Colors.seconds}
          time={time.seconds}
          timeTitle="Seconds"
          amPm={time.amPm}
          date={time.year}
          dateTitle="Year"
        />
        <Space width={15} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.bg,
  },
  text: {
    fontSize: 24,
    color: Colors.main,
    fontWeight: 'bold',
  },
  circleContainer: {
    flexDirection: 'row',
  },
});
