import styled from 'styled-components';

export const StyledProfile = styled.div`
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
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  margin: 20px auto 0;
  padding: 20px;
  background-color: white;
  & .name {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: black;
  }

  & .tag,
  & .location {
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledStat = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  width: 100%;

  & li {
    background-color: rgb(177, 217, 227);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    font-size: 16px;
    text-align: center;
    /* margin-top: 10px; */
    color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border: 1px solid rgba(277, 277, 277, 0.8);

    & .quantity {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      margin-top: 10px;
      color: black;
    }
  }
`;
