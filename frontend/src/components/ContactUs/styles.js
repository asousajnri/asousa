import styled from 'styled-components';

import devices from "../../styles/devices";

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;

export const ColumnOtherContacts = styled(ContactUsContainer)`
  @media ${devices.tabletLandscape} {
    width: 40%;
    flex-direction: column;
  }
`;

export const ColumnForm = styled(ContactUsContainer)`
  @media ${devices.tabletLandscape} {
    width: 60%;
    flex-direction: column;
  }
`;