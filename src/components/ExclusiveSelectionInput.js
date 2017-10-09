import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";

const Label = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin: 0.25rem;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const Button = styled.div`
  border: ${props =>
    props.isActive ? "2px solid #64B5F6" : "2px solid #90a4ae"};
  padding: 1rem;
  height: 60px;
  border-radius: 6px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  color: #66747a;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 22px;
  font-weight: 400;
  transition: border-color 150ms ease-in-out;
`;

const ButtonIcon = styled.div`
  height: 36px;
  width: 36px;
  flex: none;
  color: #90a4ae;
  border: 1px solid currentColor;
  stroke: currentColor;
  fill: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  & svg {
    flex: 1;
    width: 20px;
    height: 20px;
  }
`;

const ButtonText = styled.span``;

const ExclusiveSelectionInput = (
  { value, label, icon, ...remaining },
  context
) => {
  const { name, selectedValue, onChange } = context.radioGroup;
  const optional = {};
  const isActive = value === selectedValue;
  if (selectedValue !== undefined) {
    optional.checked = value === selectedValue;
  }
  if (typeof onChange === "function") {
    optional.onChange = onChange.bind(null, value);
  }

  return (
    <Label htmlFor={name}>
      <Input {...remaining} type="radio" name={name} {...optional} />
      <Button isActive={isActive}>
        {icon && (
          <ButtonIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={icon} />
            </svg>
          </ButtonIcon>
        )}
        <ButtonText>{label}</ButtonText>
      </Button>
    </Label>
  );
};

ExclusiveSelectionInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
};

ExclusiveSelectionInput.defaultProps = {
  icon: ""
};

ExclusiveSelectionInput.contextTypes = {
  radioGroup: PropTypes.object
};

export default ExclusiveSelectionInput;
