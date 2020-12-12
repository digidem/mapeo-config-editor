import NetlifyCmsWidgetFile from "netlify-cms-widget-file";
import React from "react";

const FileControl = NetlifyCmsWidgetFile.withFileControl({
  forImage: true,
});

const IconControl = React.forwardRef(({ value, onChange, ...props }, ref) => {
  const path = `/icons/${value}-100px.svg`;

  function handleChange(path) {
    if (typeof path !== "string") return onChange(path);
    value = path.replace(/^\/icons\//, "").replace(/-(100|24)px\.svg$/, "");
    onChange(value);
  }

  return (
    <FileControl ref={ref} value={path} onChange={handleChange} {...props} />
  );
});

export default IconControl;
