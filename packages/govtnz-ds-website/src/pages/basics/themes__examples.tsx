// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H1 from '@govtnz/ds/build/react-ts/H1';
import '../../commons/styles/ds/themed-H1.scss';
import basics__themes__examples from '../../commons/examples/basics__themes__examples';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import BasicsPage from '../../components/basicsPage';
// import BaseCode from '../../components/baseCode'
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><H1 styleSize="xlarge" id="main-heading">Themes Example</H1>
<ExampleContainer>
    <Example  code={basics__themes__examples[0]} iframeProps={{
        id:"iframe_basicsthemes__examples0",
        className: "example__iframe",
        src:"/basics/themes__examples__example0.html",
        title:"Example: Header containing a MainNav",
        height: 1039
      }}></Example>

</ExampleContainer>
</React.Fragment>

export default function Code(props) {
  return (
    <BasicsPage
      title={"themes__examples"}
      id={"themes__examples"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
