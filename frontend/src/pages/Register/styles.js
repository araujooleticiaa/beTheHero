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

export const Content = styled.div`
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0,0,0,0.1);

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 10px;
`;

export const Section = styled.section`
    width: 100%;
    max-width: 380px;
    h1{
        margin: 64px 0 32px;
        font-size: 32px;
    }
    p{
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }
`;
export const Form = styled.form`
    width: 100%;
    max-width: 450px;
    
    form{
        input{
            margin-top: 10px;
        }
        .input-group{
            display: flex;
        }
        .input-group input + input{
            margin-left: 8px;
        }
    }
`;

