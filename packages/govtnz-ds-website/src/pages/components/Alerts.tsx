// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2';
import '../../commons/styles/ds/themed-H2.scss';
import components__Alerts from '../../commons/examples/components__Alerts';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import MainNavMobileMenuContext from '../../commons/MainNavMobileMenuContext';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">This is the header and main navigation of your site.</P>

<H2 styleSize="large" id="how-it-works">How it works</H2>
<p>Alerts can be either &#39;static&#39; (unchanging) or &#39;live&#39; (dynamically updated by JavaScript to give live feedback).</p>
<h2 id="examples">Examples</h2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__Alerts[0]} iframeProps={{
        id:"iframe_componentsAlerts0",
        className: "example__iframe",
        src:"/components/Alerts__example0.html",
        title:"Example: Alerts (static)",
        height: 758
      }}></Example>
</ExampleContainer>

<p>test</p>
<ExampleContainer>
    <Example  code={components__Alerts[1]} iframeProps={{
        id:"iframe_componentsAlerts1",
        className: "example__iframe",
        src:"/components/Alerts__example1.html",
        title:"Example: Alerts (static)",
        height: 758
      }}></Example>
</ExampleContainer>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Alerts"}
      id={"Alerts"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
