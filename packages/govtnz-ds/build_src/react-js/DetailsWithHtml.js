import React from "react";

const DetailsWithHtml = ({
  open,
  detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0
}) => (
  <details className="g-detailsWithHtml-details" role="group" open={open}>
    <summary
      aria-controls={detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0}
      aria-expanded="false"
      className="g-detailsWithHtml-details__summary"
      role="button"
    >
      <span className="g-detailsWithHtml-details__summary-text">
        Where to find your National Insurance Number
      </span>
    </summary>
    <div
      aria-hidden="true"
      className="g-detailsWithHtml-details__text"
      id={detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0}
    >
      Your National Insurance number can be found on
      <ul>
        <li>your National Insurance card</li>
        <li>your payslip</li>
        <li>P60</li>
        <li>benefits information</li>
        <li>tax return</li>
      </ul>
    </div>
  </details>
);

export default DetailsWithHtml;
