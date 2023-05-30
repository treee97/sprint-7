import styled from "styled-components";

//Checkbox.tsx component
export const CheckboxItem = styled.div`
	display: flex;
	padding: 3px 10px;
	border-radius: 8px;
	margin: 0.5rem 0;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const WebsiteContainer = styled.div`
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	margin: 0.5rem 0;
	border-radius: 8px;
	padding: 0 1rem;
`;

export const ButtonContainer = styled.button`
	cursor: pointer;
	border: none;
	text-decoration: none;
	font-weight: 600;
	font-size: 1.3rem;
	padding: 0 0.5rem;
	border-radius: 3px;
	text-align: center;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	&: hover {
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
	}
`;

export const Input = styled.input`
	border: none;
	background-color: rgba(255, 255, 255, 0.5);
	width: 2rem;
	padding: 8px 1rem;
	text-align: center;
`;

export const OptionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
