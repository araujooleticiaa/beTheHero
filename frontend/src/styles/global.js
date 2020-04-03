import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }
  input, button, textarea{
    font: 400 14px Roboto, sans-serif;
  }
  button{
    cursor:pointer;
  }

  input{
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }
  textarea{
    width: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: none;
  }
  .button{
    width: 100%;
    height: 60px;
    background: #e02140;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    border: 0;
    margin-top: 10px;
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    text-decoration: center;
    line-height: 60px;
    transition: filter 0.2s;
  }
  .button:hover{
    filter: brightness(90%);
  }

  .backlink{
    display: flex;
    align-items:center;
    margin-top: 40px;
    color: #41414d;
    font-size:18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .backlink:hover{
    opacity: 0.8;
  }

`
