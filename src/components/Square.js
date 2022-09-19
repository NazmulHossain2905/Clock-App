import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Square = ({color, date, dateTitle}) => {
  return (
    <View style={[styles.circleContainer, {borderColor: color}]}>
      <Text style={[styles.timeText, {color: color}]}>{date}</Text>

      <Text style={[styles.dateTitle, {color: color}]}>{dateTitle}</Text>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({
  circleContainer: {
    width: 86,
    height: 46,
    borderRadius: 8,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    marginTop: -4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateTitle: {
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
