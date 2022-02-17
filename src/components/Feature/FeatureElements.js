import styled from 'styled-components';
import FeatureImg from '../../images/featured3.jpeg';

export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${FeatureImg});
height: 100vh;
max-height: 700px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
padding: 0 1rem;
h1 {
  font-size: clamp(3rem, 5vw, 5rem);
}
p {
  margin-bottom: 1rem;
  font-size: clamp(1rem, 3vw, 2rem);
}
`