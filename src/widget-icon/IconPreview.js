import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { List } from "immutable";
import { WidgetPreviewContainer } from "netlify-cms-ui-default";

const StyledImage = styled(({ src }) => (
  <img src={src || ""} alt="Selected category icon" />
))`
  display: block;
  max-width: 100px;
  height: auto;
`;

const StyledImageAsset = ({ getAsset, value, field }) => {
  const path = `/icons/${value}-100px.svg`;
  return <StyledImage src={getAsset(path, field)} />;
};

const IconPreviewContent = (props) => {
  const { value, getAsset, field } = props;
  if (Array.isArray(value) || List.isList(value)) {
    return value.map((val) => (
      <StyledImageAsset
        key={val}
        value={val}
        getAsset={getAsset}
        field={field}
      />
    ));
  }
  return <StyledImageAsset {...props} />;
};

const IconPreview = (props) => {
  return (
    <WidgetPreviewContainer>
      {props.value ? <IconPreviewContent {...props} /> : null}
    </WidgetPreviewContainer>
  );
};

IconPreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  value: PropTypes.node,
};

export default IconPreview;
