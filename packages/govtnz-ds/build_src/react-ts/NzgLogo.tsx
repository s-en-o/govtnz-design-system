import React from "react";

type Props = {
  className: any;
  id?: string;
};

const NzgLogo = ({ className, id }: Props) => (
  <svg
    aria-labelledby={id}
    className={`g-nzg-logo${className ? " " + className : ""}`}
    focusable="false"
    height="24"
    role="img"
    width="230"
  >
    <title id={id}>New Zealand Government</title>
    <path d="M0 22.2s28.9-3.3 56.2-3.3C84 19 113 22.2 113 22.2v1.1s-29.2-3-57-3c-27.2 0-56.1 3-56.1 3v-1.1zm11.1-5.3H8.6L4.2 8l-2-4.5h-.1L2.3 8v9h-.9C.4 17 0 16 0 14.8V.2h2.7l4.7 9.2c.7 1.4 1.5 3.5 1.6 4h.1l-.2-5V.2H11V17zM52.5 15l-.6 2H42v-1.8l6.8-10.6L50 2.8l-2 .1h-5.6l.5-2h9.6v2l-6.6 10.5-1 1.6h7.6zm76.3.5a9.6 9.6 0 01-4.9 1.3 7 7 0 01-5.3-2.2 9.5 9.5 0 01-1.9-6.3c0-2.3 1-5 2.9-6.5 1.2-1 2.5-1.4 4.2-1.4a7 7 0 014.7 1.6l-1.1 1.5a5.7 5.7 0 00-3.6-1.3c-1.6 0-2.8.7-3.6 2.2-.5 1-.9 2-.9 4 0 2.3.4 4 1.2 5 .7 1 2.2 1.6 3.6 1.6a5 5 0 002.4-.7V9.7h-3l-.4-2h5.7v7.9zm12.1-4.9c0 3.9-2 6.3-5.2 6.3-3.3 0-5.3-2.5-5.3-6.4 0-4 2-6.4 5.2-6.4 3.6 0 5.3 2.9 5.3 6.5zm-2.5.1c0-3.7-1-4.9-2.8-4.9-2 0-2.7 1.4-2.7 4.5 0 3.6 1 4.9 2.8 4.9 1.7 0 2.7-1.3 2.7-4.5zM152 4.6l-4.4 12.2h-2l-4.4-12.2 2.3-.4 2.4 7.4.7 2.6.8-2.7 2.3-7h2.3zm10.2 6.5h-7.4v.3c0 1 .1 1.8.5 2.4.6 1 1.6 1.4 2.8 1.4 1.1 0 2-.4 3-1.2l.8 1.4a6.2 6.2 0 01-4.2 1.5c-3.3 0-5.4-2.4-5.4-6.4 0-2 .4-3.4 1.5-4.7 1-1.1 2.1-1.6 3.6-1.6 1.3 0 2.4.4 3.3 1.3 1 1 1.4 2.4 1.5 5.2v.4zm-2.4-1.7c0-1.1-.2-2-.7-2.7a2.2 2.2 0 00-1.8-.8c-1.6 0-2.5 1.3-2.5 3.5h5zm10.4-5.1l-.8 2.2a1.8 1.8 0 00-.6-.1 2.5 2.5 0 00-2.5 2.5v7.8h-2.2v-9c0-1.4-.2-2.2-.5-3l2.2-.5c.2.5.4 1.3.4 1.9v.2c1-1.4 2-2.1 3.3-2.1h.7zm10.6 12.4h-2.2V8.5c0-1 0-1.5-.4-1.9-.2-.3-.6-.4-1.2-.4-.9 0-2.2.6-3 1.5v9h-2.2v-9c0-1.5-.1-2-.4-3l2-.5c.4.6.5 1.1.5 1.9.7-.6 1-1 1.5-1.2.7-.4 1.5-.6 2.3-.6 1.3 0 2.4.6 2.8 1.7.2.4.3 1 .3 1.5v9.2zm17.4 0H196V8c0-1.4-.4-1.9-1.4-1.9-1.1 0-2 .8-2.9 1.7v8.9h-2.1V8c0-1.3-.4-1.8-1.5-1.8-.9 0-1.8.4-2.8 1.4v9H183V7.9a7 7 0 00-.4-3l2-.6c.3.5.4 1 .4 1.7a5 5 0 013.5-1.7c1 0 2.2.6 2.8 2 1.2-1.4 2.5-2 3.7-2 1.9 0 3.1 1.2 3.1 3.4v9zm11.6-5.6h-7.4v.3c0 1 .2 1.8.5 2.4.6 1 1.6 1.4 2.8 1.4 1.1 0 2-.4 3-1.2l.8 1.4a6.2 6.2 0 01-4.2 1.5c-3.3 0-5.4-2.4-5.4-6.4 0-2 .4-3.4 1.5-4.7 1-1.1 2.1-1.6 3.6-1.6 1.4 0 2.5.4 3.3 1.3 1 1 1.4 2.4 1.5 5.2v.4zm-2.3-1.7c0-1.1-.3-2-.8-2.7-.4-.5-1-.8-1.7-.8-1.7 0-2.6 1.3-2.6 3.5h5zm13.2 7.3h-2.2V8.5c0-1 0-1.5-.4-1.9-.2-.3-.6-.4-1.2-.4-.9 0-2.2.6-3 1.5v9h-2.2v-9c0-1.5-.1-2-.5-3l2.2-.5c.2.6.4 1.1.4 1.9.7-.6 1-1 1.5-1.2.7-.4 1.5-.6 2.3-.6 1.3 0 2.4.6 2.8 1.7.2.4.3 1 .3 1.5v9.2zM229 4.6l-.6 1.5H226v7.3c0 1.5.4 2 1.6 2 .4 0 .7-.1 1.1-.3l.3 1.4a4.8 4.8 0 01-2.2.5c-.8 0-1.7-.2-2-.6-.6-.5-1-.7-1-2.5V6.1h-1.4V4.6h1.4c0-1 0-2.2.2-3.1l2.3-.6c-.1 1-.3 2.4-.3 3.7h3zM22.6 11h-7.4v.3c0 1 .2 1.8.5 2.4.7 1 1.7 1.4 2.8 1.4 1.2 0 2.1-.4 3-1.1l.9 1.3a6.2 6.2 0 01-4.2 1.5c-3.4 0-5.5-2.4-5.5-6.4a7 7 0 011.5-4.7 4.9 4.9 0 017-.4c1 1.1 1.4 2.5 1.4 5.3v.4zm-2.3-1.7c0-1.1-.3-2.1-.7-2.7-.4-.5-1-.9-1.8-.9-1.7 0-2.5 1.4-2.5 3.6h5zm19.1-4.9L36 16.8h-2l-2-6.6-.8-3-.7 2.8-1.8 6.8h-2.2L23.3 4.6l2.3-.3L27 11l.7 3 .6-2.8 1.8-6.8h2.3l1.7 6.6.7 3h.1l.6-3L37 4.6h2.3zM62 11.1h-7.4v.3c0 1 .2 1.8.6 2.4.6 1 1.6 1.4 2.7 1.4 1.2 0 2.2-.4 3-1.1l.9 1.3a6.2 6.2 0 01-4.2 1.5c-3.4 0-5.4-2.4-5.4-6.4 0-2 .4-3.5 1.4-4.7a4.9 4.9 0 017-.4c1 1.1 1.4 2.5 1.4 5.3v.4zm-2.3-1.7c0-1.1-.2-2.1-.7-2.7-.4-.5-1-.9-1.8-.9-1.7 0-2.5 1.4-2.5 3.6h5zm13.8 6.3l-1.1 1.5a3 3 0 01-1.7-1.8 4 4 0 01-3.4 1.6c-2.4 0-4-1.2-4-3.5 0-2.8 2.3-4.3 6.3-4.3h.8v-.8c0-1.5-.2-2.4-1.9-2.4-1.3 0-2.7.6-3.7 1.4l-1-1.6a9 9 0 015-1.6c1.8 0 3.1.6 3.6 1.9.2.5.2 1 .2 2.1v4.5c0 1.7 0 2.4 1 3zm-3.1-5h-.8c-1.6 0-2.7.3-3.2.8-.4.6-.6 1-.6 1.8 0 1.3.7 2.1 2 2.1 1 0 2-.6 2.5-1.6v-3zm8.4 6l-1.3.2c-1 0-1.5-.2-2-.9-.3-.5-.4-1-.4-2.1v-10c0-1.6 0-2.5-.3-3.4l2.4-.5c.2.8.2 2 .2 3.5v9.8c0 1.3 0 1.6.3 1.8.2.2.5.2.8.2l.3 1.4zm11.1-1l-1.1 1.5c-.8-.3-1.4-1-1.6-1.8-.4.4-1.4 1.6-3.5 1.6-2.4 0-4-1.2-4-3.5 0-2.8 2.3-4.3 6.3-4.3h.8v-.8c0-1.5-.2-2.4-1.9-2.4-1.3 0-2.7.6-3.7 1.4l-1-1.6c1.2-.7 2.7-1.6 5-1.6 1.8 0 3.1.6 3.6 1.9.2.5.2 1 .2 2.1v4.5c0 1.7 0 2.4 1 3zm-3.1-5H86c-1.6 0-2.7.3-3.1.8-.5.6-.7 1-.7 1.8 0 1.3.7 2.1 2 2.1 1 0 2-.6 2.5-1.6v-3zm26 6h-2.2c-.2-.4-.2-.6-.2-1.2a4 4 0 01-3.2 1.4c-3 0-4.9-2.4-4.9-6.2 0-2.6.9-4.6 2.5-5.7a4.2 4.2 0 012.4-.7c1.2 0 2.2.4 3 1.4V.2l2.2.3v12.1c0 2 0 3.3.3 4zm-2.7-3.1V7.2a3.1 3.1 0 00-2.6-1.1c-.9 0-1.6.5-2 1.2-.5.8-.7 1.8-.7 3.4 0 2.3.3 3 1 3.7.4.4 1 .6 1.7.6a3 3 0 002.6-1.4zm-9.7 3h-2.2v-8c0-1.1-.1-1.5-.4-1.9-.3-.3-.7-.5-1.2-.5-1 0-2.2.7-3 1.6v9h-1.2c-.7 0-1-.6-1-1.4V7.6c0-1.4-.2-2-.5-2.9l2-.5c.4.5.5 1 .5 1.8.7-.6 1-.9 1.6-1.2a4.5 4.5 0 012.2-.6c1.3 0 2.5.7 2.9 1.8.2.4.3 1 .3 1.5v9.2z" />
  </svg>
);

export default NzgLogo;
