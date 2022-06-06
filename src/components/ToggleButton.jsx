import React, { forwardRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  display: flex;
  background: black;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledToggleSwitchButton = styled.div`
  & input {
    display: none;
    &:checked + label {
      background-color: ${({ onColor }) => onColor};
      &::before {
        //order: 2;
        left: 2em;
      }
    }
  }

  & label {
    background-color: ${({ offColor }) => offColor};
    border-radius: 2em;
    cursor: pointer;
    //display: block;
    display: flex;
    align-items: center;
    font-size: ${({ size }) => size};
    justify-content: space-around;
    height: 2em;
    position: relative;
    transition: 0.2s; // 本体の色
    width: 3.75em;

    &::before {
      background-color: #fff;
      border-radius: 100%;
      content: "";
      display: inline-block;
      height: 1.5em;
      position: absolute;
      left: 0.25em;
      transition: 0.2s ease-out;
      width: 1.5em;
      z-index: 2;
    }

    &::after {
      background-color: red;
      border-radius: 100%;
      content: "";
      display: inline-block;
      height: 1.5em;
      position: absolute;
      right: 0.25em;
      visibility: hidden;
      width: 1.5em;
      z-index: 2;
    }

    & .icons {
      border-radius: 2em;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  }
`;

const ToggleSwitchButton = forwardRef(
  ({ className, handleChange, offColor, onColor, size }, ref) => (
    <StyledToggleSwitchButton
      className={className}
      offColor={offColor}
      onColor={onColor}
      size={size}
    >
      <input id="btn-mode" type="checkbox" onChange={handleChange} />
      <label htmlFor="btn-mode"></label>
    </StyledToggleSwitchButton>
  )
);

const ToggleButton = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleChange = useCallback(() => {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  }, [isToggle]);

  useEffect(() => {
    if (isToggle) {
      console.log("switch on!");
    } else {
      console.log("switch off!");
    }
  }, [isToggle]);

  return (
    <Container>
      <ToggleSwitchButton
        className="toggle-switch-button"
        handleChange={handleChange}
        offColor="#bbb"
        onColor="lightgreen"
        size="1em"
      />
    </Container>
  );
};

export default ToggleButton;
