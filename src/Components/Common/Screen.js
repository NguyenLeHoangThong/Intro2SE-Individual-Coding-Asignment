import styled from 'styled-components';

export const Screen = styled.div`
    width: 100%;
    background-color: rgba(60, 64, 67, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 12px;

    @media (max-width: 576px) {
        flex-grow: 1;
        border-radius: 0px;
    }
`;