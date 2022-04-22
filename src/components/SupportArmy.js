import InlineSVG from "svg-inline-react";

function SupportArmy() {
    const svgSourceArmy = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105" height="64" viewBox="0 0 105 64" fill="none">
<rect width="105" height="64" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_61" transform="scale(0.00952381 0.015625)"/>
</pattern>
<image id="image0_32_61" width="105" height="64" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>`;
  return (
    <a href="https://next.privat24.ua/payments/form/%7B%22token%22:%225e99fe0a-7962-444c-8ee4-dc236efb2aa3%22%7D?lang">
      <InlineSVG src={svgSourceArmy} />
    </a>
  );
}
export default SupportArmy;