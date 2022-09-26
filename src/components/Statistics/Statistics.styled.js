import styled from 'styled-components';

export const StatisticsCard = styled.section`
  box-sizing: border-box;
  overflow: hidden;

  width: 412px;
  border-radius: 4px;

  background-color: #1e1e1e;
  color: ${p => p.theme.colors.white};
  text-align: center;

  margin: 0 auto;
  margin-top: 40px;
`;

export const StatisticsTitle = styled.h2`
  margin: 0.85em 0px;

  font-weight: 500;
  font-size: 1.5rem;
`;

export const StatsList = styled.ul`
  padding: 0;
  margin: 0;

  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.background.dark};
  padding: 16px;
  gap: 32px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StatsTitle = styled.span`
  font-weight: 400;
  font-size: 0.85rem;

  color: ${p => p.theme.colors.grey};
`;

export const StatsText = styled.span`
  font-weight: 400;
  font-size: 1rem;
  font-weight: 500;

  color: ${p => p.theme.colors.white};
`;
