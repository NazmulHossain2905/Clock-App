import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Space from './Space';
import Square from './Square';

const Circle = ({color, time, timeTitle, amPm, date, dateTitle}) => {
  return (
    <View>
      <View style={[styles.circleContainer, {borderColor: color}]}>
        <Text style={[styles.timeText, {color: color}]}>{time}</Text>

        <Text style={[styles.timeTitle, {color: color}]}>{timeTitle}</Text>
      </View>
      {amPm && <Text style={[styles.amPm, {color: color}]}>{amPm}</Text>}

      <Space height={15} />
      <Square color={color} date={date} dateTitle={dateTitle} />
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circleContainer: {
    width: 86,
    height: 86,
    borderRadius: 50,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  timeTitle: {
    fontSize: 12,
    marginTop: -5,
  },
  amPm: {
    position: 'absolute',
    top: 0,
    right: -20,
    fontWeight: '500',
  },
});
