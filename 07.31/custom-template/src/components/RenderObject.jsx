import { Fragment } from "react";
import { exact, string } from "prop-types";
import { itemTypes } from "@/data/type";
function RenderObject({ jordan }) {
  const getData = (data) =>
    Object.entries(data).map(([key, value]) => {
      return (
        <Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
      );
    });

  return <ul>{getData(jordan)}</ul>;
}

export default RenderObject;

RenderObject.propTypes = {
  jordan: itemTypes,
};
