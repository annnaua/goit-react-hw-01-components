import PropTypes from 'prop-types';

import {
  StatisticsCard,
  StatisticsTitle,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsText,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>Upload stats</StatisticsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <StatsTitle>{label}</StatsTitle>
              <StatsText>{percentage}%</StatsText>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
