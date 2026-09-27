import styled from 'styled-components'

const Wrapper = styled.header`
  h1 {
    margin: 10px;
    text-align: center;
    font-size:55px;
    font-weight:600;

    a {
      color: #111827;
      text-decoration: none;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    padding: 1rem 0;
    margin: 15px;
    background: #1f2937;
    border-radius: 12px;

    li {
      a {
        color: #f9fafb;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;

        &:hover {
          color: #fbbf24;
        }
      }
    }
  }
`

export default Wrapper