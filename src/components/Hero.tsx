import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 4rem 0;

  p {
    margin: 0 1rem;
  }

  h1 {
    white-space: nowrap;
    font-size: 24px;
  }

  h1 > span {
    font-weight: 200;
    display: block;
  }

  @media (min-width: 768px) {
    margin: 1.5rem 0;
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 15px;
      max-width: 540px;
      margin: 0 auto;
    }
  }
`;

export default function Hero() {
  return (
    <Container>
      <h1>
        <span>Reliable, efficient delivery</span> Powered by Technology
      </h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </Container>
  );
}
