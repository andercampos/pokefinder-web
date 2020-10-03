import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  padding: 0 32px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--text-color);
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  align-items: center;
  margin: 32px 8px 32px 0;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    background: var(--shape);

    border-radius: 10px;

    input {
      height: 60px;
      flex: 1;
      background: none;
      border: 0;
      padding: 16px;
      color: var(--text-color);
    }

    svg {
      margin-right: 16px;
    }
  }
  button {
    height: 60px;
    width: 150px;
    background: var(--primary-color);
    border: 0;
    border-radius: 10px;
    margin-left: 16px;
    transition: background 0.2s;

    &:hover {
      background: var(--primary-hover);
    }
  }

  select {
    width: 200px;
    height: 60px;
    background: var(--primary-color);
    padding-left: 8px;

    border: 0;
    border-radius: 10px;
    margin-left: 16px;

    font-size: 16px;
    color: #fff;

    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 0;
  gap: 16px;

  margin-bottom: 32px;
`;
