import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 2%;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Form = styled.form`
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
    form{
        margin-top: 30px;
    
        h1{
            font-size: 32px;
            margin-bottom: 20px;
        }

        svg{
            margin-right: 8px;
        }
    }
`;
