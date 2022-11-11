import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    margin: 40px auto;
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 300px;
    @media (max-width: 576px) {
        width: 100%;
        height: 100vh;
        margin: 0;
    }
`;