import { getRandomHexColor } from 'helpers/getRandomColor';
import { StyledItem, StyledSection } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ data }) => {
  return (
    <StyledSection className="statistics">
      <div className="title-container">
        <h2 className="title">Upload stats</h2>
      </div>
      <ul className="stat-list">
        {data.map(stats => {
          const bgColor = getRandomHexColor();
          return (
            <StyledItem $bgcolor={bgColor} key={stats.id}>
              <span className="label">{stats.label}</span>
              <span className="percentage">{stats.percentage}%</span>
            </StyledItem>
          );
        })}
      </ul>
    </StyledSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
export default Statistics;
