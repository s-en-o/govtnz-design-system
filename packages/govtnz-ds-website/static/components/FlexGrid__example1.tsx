// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import FlexContainer from '@govtnz/ds/build/react-ts/FlexContainer.tsx';import FlexRow from '@govtnz/ds/build/react-ts/FlexRow.tsx';import FlexColumn from '@govtnz/ds/build/react-ts/FlexColumn.tsx';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator({})}>
        <FlexContainer width="fixed" {...onChangeGenerator({})}>
            <FlexRow {...onChangeGenerator({})}>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-6 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-6 </FlexColumn>
                <FlexColumn xs="12" sm="12" md="12" lg="12" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-lg-12 </FlexColumn>
                <FlexColumn xs="1" sm="1" md="1" lg="1" {...onChangeGenerator({})}> 1/12 </FlexColumn>
                <FlexColumn xs="11" sm="11" md="11" lg="11" {...onChangeGenerator({})}> 11/12 </FlexColumn>
                <FlexColumn xs="2" sm="2" md="2" lg="2" {...onChangeGenerator({})}> 2/12 </FlexColumn>
                <FlexColumn xs="10" sm="10" md="10" lg="10" {...onChangeGenerator({})}> 10/12 </FlexColumn>
                <FlexColumn xs="3" sm="3" md="3" lg="3" {...onChangeGenerator({})}> 3/12 </FlexColumn>
                <FlexColumn xs="9" sm="9" md="9" lg="9" {...onChangeGenerator({})}> 9/12 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> 4/12 </FlexColumn>
                <FlexColumn xs="8" sm="8" md="8" lg="8" {...onChangeGenerator({})}> 8/12 </FlexColumn>
                <FlexColumn xs="5" sm="5" md="5" lg="5" {...onChangeGenerator({})}> 5/12 </FlexColumn>
                <FlexColumn xs="7" sm="7" md="7" lg="7" {...onChangeGenerator({})}> 7/12 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6" {...onChangeGenerator({})}> 6/12 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6" {...onChangeGenerator({})}> 6/12 </FlexColumn>
                <FlexColumn xs="7" sm="7" md="7" lg="7" {...onChangeGenerator({})}> 7/12 </FlexColumn>
                <FlexColumn xs="5" sm="5" md="5" lg="5" {...onChangeGenerator({})}> 5/12 </FlexColumn>
                <FlexColumn xs="8" sm="8" md="8" lg="8" {...onChangeGenerator({})}> 8/12 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> 4/12 </FlexColumn>
                <FlexColumn xs="9" sm="9" md="9" lg="9" {...onChangeGenerator({})}> 9/12 </FlexColumn>
                <FlexColumn xs="3" sm="3" md="3" lg="3" {...onChangeGenerator({})}> 3/12 </FlexColumn>
                <FlexColumn xs="10" sm="10" md="10" lg="10" {...onChangeGenerator({})}> 10/12 </FlexColumn>
                <FlexColumn xs="2" sm="2" md="2" lg="2" {...onChangeGenerator({})}> 2/12 </FlexColumn>
                <FlexColumn xs="11" sm="11" md="11" lg="11" {...onChangeGenerator({})}> 11/12 </FlexColumn>
                <FlexColumn xs="1" sm="1" md="1" lg="1" {...onChangeGenerator({})}> 1/12 </FlexColumn>
            </FlexRow>
        </FlexContainer>
    </Example>);

      const onChangeGenerator = (props) => {
        // See onChangeGenerator insertion docs.
        // We can't know if a component takes props
        // of 'value' and 'onChange' so we insert some
        // and if they're not used that's ok.
        // The reason why we have 3 is because that's the
        // most number of inputs in a DS components, and it's 
        // simpler to just make 3.
  
        const [value, setValue] = useState(props && props.value);
        const [value2, setValue2] = useState(props && props.value2);
        const [value3, setValue3] = useState(props && props.value3);
      
        return {
          value,
          value2,
          value3,
          onChange: e => setValue(e.target.value),
          onChange2: e => setValue2(e.target.value),
          onChange3: e => setValue3(e.target.value),
        };
      };
    
      document.addEventListener('DOMContentLoaded', () => {
        const selector = '#root';
        const root = document.querySelector(selector);
        if (!root) {
          console.error("Couldn't find app mount point ", selector);
          return;
        }
        ReactDOM.hydrate(<PageContent />, root, window.afterRender);
      });
      