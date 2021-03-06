import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import DeleteIcon from './DeleteIcon';

const Wrapper = styled.section`
  display: flex;
`;

const StyledInput = styled(Input)`
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

const Heading = (props) => {
  const [isEditable, changeEditableState] = useState(false);
  const [isDeleteIconVisible, changeVisibility] = useState(false);

  const showDeleteIcon = () => {
    changeVisibility(true);
  };

  const hideDeleteIcon = () => {
    changeVisibility(false);
  };

  const editHeader = () => {
    changeEditableState(true);
  };

  const updateHeading = (heading) => {
    changeEditableState(false);
    props.updateHeading(heading);
  };

  const deleteIcon = isDeleteIconVisible ? (
    <DeleteIcon delete={props.deleteTodo} />
  ) : (
    ''
  );
  let content = (
    <Wrapper onMouseOver={showDeleteIcon} onMouseLeave={hideDeleteIcon}>
      <h1 onClick={editHeader}>{props.heading}</h1>
      {deleteIcon}
    </Wrapper>
  );

  if (isEditable) {
    content = <StyledInput value={props.heading} onKeyPress={updateHeading} />;
  }
  return content;
};

export default Heading;
