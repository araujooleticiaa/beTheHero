import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 30px;
    margin: 0 auto;

    header{
        display: flex;
        align-items: center;

        span{
            font-size: 20px;
            margin-left: 24px;
        }
        img{
            height: 64px;
        }
        a{
            width: 260px;
            text-align: center;
            margin-left: auto;
            margin-top: 0;
        }
        button{
            height: 60px;
            width: 60px;
            border-radius: 4px;
            border: 1px solid #dcdcde;
            background: transparent;
            margin-left: 16px;
            translate: border-color 0.2s;
        }
        button:hover{
            border-color: #999;
        }
    }

    h1{
        margin-top: 80px;
        margin-bottom: 24px;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;

        li{
            background: #fff;
            padding: 24px;
            position: relative;
            border-radius: 8px;

            button{
                position: absolute;
                border: 0;
                right: 24px;
                background: transparent;
                top: 24px;
                translate: opacity 0.2s;
            }
            button:hover{
                opacity: 0.8;
            }

            strong{
                display: block;
                margin-top: 16px;
                color: #41414d;
            }
            p + strong{
                margin-top: 32px;
            }
            p{
              color: #737380;  
              line-height: 21px;
              font-size: 16px;
            }
        }
    }

`;
