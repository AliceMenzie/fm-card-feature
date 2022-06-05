import styled from "styled-components";

const Card = styled.div`
  display: block;
  margin: 1rem auto;
  @media (min-width: 768px) {
    margin: 1.5rem 1rem;
    height: 250px;
    width: 350px;
  }
  background-color: white;
  height: 222px;
  width: 311px;
  border-radius: 5px;
  border-top: 5px solid #4d4f62;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #4d4f62;
  }

  p {
    font-size: 13px;
    color: #4d4f62;
  }

  .container {
    padding: 0.5rem 2rem 0 2rem;
  }

  img {
    padding: 0rem 2rem 1.2rem 2rem;
  }
`;

interface DefaultCardProps {
  children?: any;
  className?: string;
  image?: string;
  alt?: string;
  test?: string;
}

export default function DefaultCard({
  children,
  className,
  image,
  alt,
}: DefaultCardProps) {
  return (
    <Card className={className}>
      <div className="container">{children}</div>
      <div>
        <img src={image} alt={alt} />
      </div>
    </Card>
  );
}
