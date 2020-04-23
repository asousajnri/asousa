import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import {
  Container,
  CasesList,
  HoverOverlay,
  PlaceholderList,
  Placeholder,
} from './styles';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function loadCases() {
        const response = await api.get('get-works');

        setCases(response.data);
      }

      loadCases();
      setTimeout(() => setLoading(false), 3000);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <h2>Cases</h2>

      {loading ? (
        <PlaceholderList>
          {cases.map(item => (
            <Placeholder />
          ))}
        </PlaceholderList>
      ) : (
        <CasesList>
          {cases.map(item => (
            <li>
              <a href={item.url}>
                <img
                  src={`http://localhost:3333/files/${item.image}`}
                  alt={item.title}
                />

                <HoverOverlay>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </HoverOverlay>
              </a>
            </li>
          ))}
        </CasesList>
      )}
    </Container>
  );
};

export default Cases;
