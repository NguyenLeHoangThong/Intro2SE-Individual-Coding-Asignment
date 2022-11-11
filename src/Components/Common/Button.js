import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    font-size: 28px;
    outline: none;
    width: 25%;
    padding: 20px 0;
    border: 1px outset white;
    background-color: rgba(255, 255, 255, 0.75);
    ${({ control }) => control && `background-color:skyBlue;`};
    ${({ spanTwoColumn }) => spanTwoColumn && `width: 50%;`};
    ${({ operation }) => operation && `background-color:gray;`};
    &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    ${({ operation }) => operation && `background-color:#ccc;`};
    }

    @media (max-width: 576px) {
        height: 14vh;
    }
`;