import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Info } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Info>Good: {good}</Info>
      <Info>Neutral: {neutral}</Info>
      <Info>Bad: {bad}</Info>
      <Info>Total: {total}</Info>
      <Info>Positive feedback: {positivePercentage}%</Info>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};