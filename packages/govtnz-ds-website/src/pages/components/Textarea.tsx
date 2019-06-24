// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import components__Textarea from '../../commons/examples/components__Textarea';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><ExampleContainer>
    <ExampleHeading>Example of Textarea</ExampleHeading>
    <Example  code={components__Textarea[0]} iframeProps={{
        id:"iframe_componentsTextarea0",
        className: "example__iframe",
        src:"/components/Textarea__example0.html",
        title:"Example of Textarea",
        height: 549
      }}></Example>
</ExampleContainer>

<H2 styleSize="large" id="credit">Credit</H2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Textarea"}
      id={"Textarea"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
