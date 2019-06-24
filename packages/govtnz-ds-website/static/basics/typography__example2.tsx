// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import CaptionXl from '@govtnz/ds/build/react-ts/CaptionXl.tsx';import H1 from '@govtnz/ds/build/react-ts/H1.tsx';import CaptionL from '@govtnz/ds/build/react-ts/CaptionL.tsx';import H2 from '@govtnz/ds/build/react-ts/H2.tsx';import CaptionM from '@govtnz/ds/build/react-ts/CaptionM.tsx';import H3 from '@govtnz/ds/build/react-ts/H3.tsx';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator({})}>
        <ExampleSection {...onChangeGenerator({})}>
            <CaptionXl {...onChangeGenerator({})}>caption-xl</CaptionXl>
            <H1 styleSize="xlarge" {...onChangeGenerator({})}>g-heading-xl</H1>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <CaptionL {...onChangeGenerator({})}>caption-l</CaptionL>
            <H2 styleSize="large" {...onChangeGenerator({})}>g-heading-l</H2>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <CaptionM {...onChangeGenerator({})}>caption-m</CaptionM>
            <H3 styleSize="medium" {...onChangeGenerator({})}>g-heading-m</H3>
        </ExampleSection>
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
      