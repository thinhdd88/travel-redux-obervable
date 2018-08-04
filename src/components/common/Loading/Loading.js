import styled from 'styled-components';
import './style.css';

export const Loading = styled.div`
  	border: 3px solid #f3f3f3;
	border-radius: 50%;
	border-top: 3px solid #f1a228;
	border-right: 3px solid #ddd;
	width: 40px;
	height: 40px;
	animation: spin 1s linear infinite;
	margin: 10px auto;
`;