import styled from 'styled-components';

export const StyledSection = styled.section`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0;
  padding: 20px;
  background-color: lightgray;
  box-shadow: 7px 7px 11px 0px rgba(0, 0, 0, 0.75);

  & .title-container {
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    max-width: 300px;
    width: 100%;
    color: rgba(0, 0, 0, 0.5);
    background-color: white;
  }

  & .stat-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 300px;
    width: 100%;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: white;
  background-color: ${props => props.$bgcolor};
  border: 1px solid rgba(277, 277, 277, 0.8);
`;
