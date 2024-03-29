import dynamic from "next/dynamic";
import React from "react";

const NoSSRWrapper: React.FC<any> = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
