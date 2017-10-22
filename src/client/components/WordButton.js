import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.div`
	display: flex;
	flex: 0 0 32%;
	height: 180px;
	justify-content: center;
	align-items: center
`;

const Button = styled.span`
	width: 50%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: #ddd;
	border: 1px solid #fff;
	border-radius: 2px;
	cursor: pointer;
	
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export default class extends React.Component {
	static propTypes = {
		word: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	handleClick = () => {
		this.props.onClick(this.props.word);
	};

	render() {
		return (
			<ButtonContainer>
				<Button onClick={this.handleClick}>
					{this.props.word}
				</Button>
			</ButtonContainer>
		);
	}
}