import styled from "styled-components";

import devices from "../../styles/devices";

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	
	@media ${devices.tabletLandscape} {
    	flex-direction: row;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	
	@media ${devices.tabletLandscape} {
		width: 50%;
	}
`;