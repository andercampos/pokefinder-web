import styled, { css } from 'styled-components';

interface IFormProps {
  hasError: boolean;
}

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

export const Form = styled.form<IFormProps>`
  margin-top: 16px;
  display: flex;
  align-items: center;
  margin: 32px 8px 32px 0;

  ${props =>
    props.hasError &&
    css`
      margin-bottom: 8px;
    `}

  div {
    display: flex;
    align-items: center;
    flex: 1;
    background: var(--shape);

    border: 2px solid var(--shape);

    border-radius: 10px;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    input {
      border: 0;
      height: 60px;
      flex: 1;
      background: none;
      padding: 16px;
      color: var(--text-color);
    }

    svg {
      margin-right: 16px;

      ${props =>
        props.hasError &&
        css`
          color: #c53030;
        `}
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

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 0;
  gap: 16px;

  margin-bottom: 100px;

  button {
    position: absolute;
    bottom: -70px;
    width: 150px;
    height: 50px;
    border: 0;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--primary-color);
    transition: background 0.2s;

    &:hover {
      background: var(--primary-hover);
    }

    svg {
      margin-right: 8px;
    }
  }
`;
