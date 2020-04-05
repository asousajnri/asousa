import styled from 'styled-components';

import devices from '../../../styles/devices';

export const AboutMeContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${devices.tabletLandscape} {
    flex-direction: row-reverse;
  }
`;

export const Side = styled.section`
  width: 100%;
  position: relative;
  height: 34rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media ${devices.tabletPortrait} {
    height: 64rem;
  }

  @media ${devices.tabletLandscape} {
    width: 50%;
  }
`;

export const SideBio = styled(Side)`
  padding: 5rem 2rem;
  background: #fff;
  height: auto;

  @media ${devices.tabletPortrait} {
    padding: 6rem;
    height: auto;
  }

  @media ${devices.desktop} {
    padding: 9rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.5rem;

    @media ${devices.desktop} {
      font-size: 2rem;
    }
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 3.6rem;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 4rem;
    letter-spacing: -0.5px;
    margin-bottom: 1rem;
    font-weight: 900;

    @media ${devices.tabletPortrait} {
      font-size: 5rem;
    }
  }

  span {
    font-size: 1.8rem;
  }
`;

export const ContainerPlaceholder = styled.div`
  width: 100%;
  padding: 3rem 2rem;
`;

export const Photo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(1);
`;

export const LayerOverlay = styled.div`
  background: ${props => props.theme.colors.primary};
  opacity: 0.5;
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;
