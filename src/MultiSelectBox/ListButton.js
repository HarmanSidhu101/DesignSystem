import React, { Fragment } from 'react';
import { FaCaretDown, FaChevronDown } from 'react-icons/fa';

import { StyledListButtonContainer, ListButtonIcons } from './MultiSelect.style';

const ControlType = ({ type, isOpen }) => {
	switch (type) {
		case 'chevron':
			return (
				<ListButtonIcons.Chevron>
					<FaChevronDown />
				</ListButtonIcons.Chevron>
			);

		case 'chevron-light':
			return (
				<ListButtonIcons.ChevronLight $open={isOpen}>
					<FaChevronDown />
				</ListButtonIcons.ChevronLight>
			);
		case 'normal':
		default:
			return (
				<ListButtonIcons.Normal>
					<FaCaretDown />
				</ListButtonIcons.Normal>
			);
	}
};

const ListButton = ({ type, isOpen, selectedItem, placeHolder, resetButtonHandler }) => {
	return (
		<Fragment>
			<StyledListButtonContainer.TextContainer>
				{selectedItem.map((item) => item.display_name).join(', ') || placeHolder}
			</StyledListButtonContainer.TextContainer>
			<StyledListButtonContainer.IconContainer>
				{!!selectedItem.length && (
					<StyledListButtonContainer.ResetIcon onClick={resetButtonHandler} />
				)}
				<ControlType type={type} isOpen={isOpen} />
			</StyledListButtonContainer.IconContainer>
		</Fragment>
	);
};

export default ListButton;
