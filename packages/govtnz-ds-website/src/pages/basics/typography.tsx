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
import Ul from '@govtnz/ds/build/react-ts/Ul';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li';
import '../../commons/styles/ds/themed-Li.scss';
import A from '@govtnz/ds/build/react-ts/A';
import '../../commons/styles/ds/themed-A.scss';
import basics__typography from '../../commons/examples/basics__typography';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import BasicsPage from '../../components/basicsPage';
// import BaseCode from '../../components/baseCode'
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><P styleSize="large">Effective, accessible content relies on a clear font, consistent headings, succinct body text paragraphs, descriptive links, and scannable lists.</P>

<H2 styleSize="large" id="font">Font</H2>
<P>We are investigating how font choice will be incorporated into the design system, in order to meet New Zealand language requirements.</P>
<h2 id="headings">Headings</h2>
<ExampleContainer>
    <Example  code={basics__typography[0]} iframeProps={{
        id:"iframe_basicstypography0",
        className: "example__iframe",
        src:"/basics/typography__example0.html",
        title:"Example: Headings (Typography)",
        height: 430
      }}></Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading level={3}>Same heading level varying by size only</ExampleHeading>
    <Example  code={basics__typography[1]} iframeProps={{
        id:"iframe_basicstypography1",
        className: "example__iframe",
        src:"/basics/typography__example1.html",
        title:"Example: Same heading level varying by size only (Typography)",
        height: 430
      }}></Example>
</ExampleContainer>

<P>Use headings consistently to create a clear hierarchy throughout your content, and to allow people using assistive technology to quickly scan and move through the page.</P>
<P>Mark up headings semantically using the appropriate <code>&lt;h#&gt;</code> level HTML element. In our design system, the font size is independent of the heading hierarchy. This allows for design flexibility.</P>
<P>Write all headings in sentence case, with the exception of proper nouns, which require initial capitals.</P>
<ExampleContainer>
    <ExampleHeading level={3}>Headings with captions</ExampleHeading>
    <Example  code={basics__typography[2]} iframeProps={{
        id:"iframe_basicstypography2",
        className: "example__iframe",
        src:"/basics/typography__example2.html",
        title:"Example: Headings with captions (Typography)",
        height: 385
      }}></Example>
</ExampleContainer>

<P>Sometimes you may need to make it clear that content under a heading is part of a larger section or group. To do this, you can use a heading with a caption.</P>
<ExampleContainer>
    <ExampleHeading level={3}>Headings with captions inside the <code>h1</code></ExampleHeading>
    <Example  code={basics__typography[3]} iframeProps={{
        id:"iframe_basicstypography3",
        className: "example__iframe",
        src:"/basics/typography__example3.html",
        title:"Example: Headings with captions inside the h1 (Typography)",
        height: 178
      }}></Example>
</ExampleContainer>

<P>If the caption should be considered part of the page heading, you can also nest the caption within the <code>h1</code>.</P>
<h2 id="paragraphs">Paragraphs</h2>
<P>There are three font sizes for paragraphs, giving you:</P>
<Ul>
<Li>a large size for lead paragraphs</Li>
<Li>a medium size for standard body text</Li>
<Li>a smaller size for small body text.</Li>
</Ul>
<P>You can use these text sizes to indicate the relative importance of the content on the page.</P>
<ExampleContainer>
    <ExampleHeading level={3}>Large size for lead paragraph</ExampleHeading>
    <Example  code={basics__typography[4]} iframeProps={{
        id:"iframe_basicstypography4",
        className: "example__iframe",
        src:"/basics/typography__example4.html",
        title:"Example: Large size for lead paragraph (Typography)",
        height: 188
      }}></Example>
</ExampleContainer>

<P>A lead paragraph, also called a summary or short description, is the introduction at the top of a page that summarises what a user can expect from that page.</P>
<P>Remember that the summary, along with the title, is usually what users see in search results. Keep the content short, or put the key information at the start, as Google usually only shows the first 160 characters.</P>
<P>Only use one lead paragraph per page.</P>
<ExampleContainer>
    <ExampleHeading level={3}>Medium size for standard body text</ExampleHeading>
    <Example  code={basics__typography[5]} iframeProps={{
        id:"iframe_basicstypography5",
        className: "example__iframe",
        src:"/basics/typography__example5.html",
        title:"Example: Medium size for standard body text (Typography)",
        height: 220
      }}></Example>
</ExampleContainer>

<P>The majority of your body copy should use medium size.</P>
<ExampleContainer>
    <ExampleHeading level={3}>Small size for small body text</ExampleHeading>
    <Example  code={basics__typography[6]} iframeProps={{
        id:"iframe_basicstypography6",
        className: "example__iframe",
        src:"/basics/typography__example6.html",
        title:"Example: Small size for small body text (Typography)",
        height: 144
      }}></Example>
</ExampleContainer>

<P>Use it sparingly for &#39;small print&#39; content, such as notes and references.</P>
<h2 id="links">Links</h2>
<ExampleContainer>
    <ExampleHeading level={3}>Default</ExampleHeading>
    <Example  code={basics__typography[7]} iframeProps={{
        id:"iframe_basicstypography7",
        className: "example__iframe",
        src:"/basics/typography__example7.html",
        title:"Example: Links (Typography)",
        height: 152
      }}></Example>
</ExampleContainer>

<P>Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.</P>
<P>Remember to make link text descriptive of the destination. Just “Read more” is not acceptable.</P>
<h2 id="lists">Lists</h2>
<P>Use lists to break up blocks of text into chunks to make them easier to read.</P>
<ExampleContainer>
    <ExampleHeading level={3}>Bulleted lists</ExampleHeading>
    <Example  code={basics__typography[8]} iframeProps={{
        id:"iframe_basicstypography8",
        className: "example__iframe",
        src:"/basics/typography__example8.html",
        title:"Example: Bulleted lists (Typography)",
        height: 346
      }}></Example>
</ExampleContainer>

<P>Introduce bulleted lists with a partial ‘stub’ sentence ending in a colon. Start each list item with a lowercase letter, and do not use a full stop at the end. Ensure each list item makes grammatical sense when read after the stub sentence above.</P>
<P>Use bulleted lists to highlight options and examples in content, especially when a sentence contains more than three clauses.</P>
<ExampleContainer>
    <ExampleHeading level={3}>Numbered lists</ExampleHeading>
    <Example  code={basics__typography[9]} iframeProps={{
        id:"iframe_basicstypography9",
        className: "example__iframe",
        src:"/basics/typography__example9.html",
        title:"Example: Numbered lists (Typography)",
        height: 354
      }}></Example>
</ExampleContainer>

<P>Use numbered lists instead of bulleted lists when the order of the items is relevant.</P>
<P>You do not need a lead-in line for numbered lists, although a summary sentence can be helpful for users. If numbered items are complete sentences, use full stops at the end.</P>
<h2 id="credit">Credit</h2>
<P>Guidance, original HTML and CSS derived from <A className="g-link"  href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</A>.</P>
</React.Fragment>

export default function Code(props) {
  return (
    <BasicsPage
      title={"typography"}
      id={"typography"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
