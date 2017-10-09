/* eslint-disable */

import PropTypes from "prop-types";
import React, { Component } from "react";

class ExclusiveSelectionGroup extends React.Component {
  getChildContext() {
    const { name, selectedValue, onChange } = this.props;
    return {
      radioGroup: {
        name,
        selectedValue,
        onChange,
      },
    };
  }

  render() {
    const {
      Component,
      name,
      selectedValue,
      onChange,
      children,
      ...rest
    } = this.props;
    return <Component {...rest}>{children}</Component>;
  }
}

ExclusiveSelectionGroup.defaultProps = {
  Component: "div",
};

ExclusiveSelectionGroup.propTypes = {
  name: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

ExclusiveSelectionGroup.childContextTypes = {
  radioGroup: PropTypes.object,
};

export default ExclusiveSelectionGroup;
