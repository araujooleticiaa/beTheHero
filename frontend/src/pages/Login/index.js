import React, {useState} from 'react';

import { FiLogIn } from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api'

import { Container, Form } from './styles';

import logo from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';



export default function Login() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handlelogin(e){
    e.preventDefault();

    try{
      const response = await api.post('sessions', {id});

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    }catch(err){
      alert(`Falha ao efetuar login, tente novamente`);
    }

  }

  return (
    <Container>
        <Form>

            <img src={logo} alt="Logo"/>

            <form onSubmit={handlelogin}>
                <h1>Faça seu Login!</h1>

                <input
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <button className="button " type="submit">Entrar</button>

                <Link className="backlink" to="/register">
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho casdastro
                </Link>
            </form>

        </Form>
        <img src={herosImg} alt="Heroes"/>
    </Container>
  );
}
