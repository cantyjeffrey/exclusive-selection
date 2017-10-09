// @flow

import React, { Component } from "react";
import styled from "styled-components";

import { Container } from "./style";
import { thumbsUp, thumbsDown } from "./icon";
import ExclusiveSelectionInput from "../ExclusiveSelectionInput";
import ExclusiveSelectionGroup from "../ExclusiveSelectionGroup";

const ExclusiveSelection = styled(ExclusiveSelectionGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = {
    selectedValue: ""
  };
  handleChange = value => {
    this.setState(state => ({ ...state, selectedValue: value }));
  };
  render() {
    const { selectedValue } = this.state;
    return (
      <Container>
        <ExclusiveSelection
          name="options"
          selectedValue={selectedValue}
          onChange={this.handleChange}
        >
          <ExclusiveSelectionInput value="yes" label="Yes" icon={thumbsUp} />
          <ExclusiveSelectionInput value="no" label="No" icon={thumbsDown} />
          <ExclusiveSelectionInput value="maybe" label="¯\_(ツ)_/¯" />
        </ExclusiveSelection>
      </Container>
    );
  }
}

export default App;
