import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, lengths, buttons, Icon } from "netlify-cms-ui-default";

const TopBar = styled.div`
  display: flex;
  /* margin-top: 8px; */
  flex-direction: row;
  justify-content: space-between;
  height: auto !important;
  border-radius: ${lengths.borderRadius} 0 0 ${lengths.borderRadius} !important;
  position: relative;
`;

const TopBarButton = styled.button`
  ${buttons.button};
  color: ${colors.controlLabel};
  background: transparent;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  width: 32px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBarButtonSpan = TopBarButton.withComponent("span");

const DragIconContainer = styled(TopBarButtonSpan)`
  width: 30px;
  cursor: move;
`;

const DragHandle = ({ dragHandleHOC }) => {
  const Handle = dragHandleHOC(() => (
    <DragIconContainer>
      <Icon type="drag-handle" size="small" />
    </DragIconContainer>
  ));
  return <Handle />;
};

const ListItemTopBar = ({
  className,
  collapsed,
  onCollapseToggle,
  onRemove,
  dragHandleHOC,
}) => (
  <TopBar className={className}>
    {dragHandleHOC ? <DragHandle dragHandleHOC={dragHandleHOC} /> : null}
    {onRemove ? (
      <TopBarButton onClick={onRemove}>
        <Icon type="close" size="small" />
      </TopBarButton>
    ) : null}
  </TopBar>
);

ListItemTopBar.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  onCollapseToggle: PropTypes.func,
  onRemove: PropTypes.func,
};

const StyledListItemTopBar = styled(ListItemTopBar)`
  display: flex;
  justify-content: space-between;
  height: 26px;
  border-radius: ${lengths.borderRadius} ${lengths.borderRadius} 0 0;
  position: relative;
`;

export default StyledListItemTopBar;
