import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content, Section, Form } from './styles';

import logo from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whastapp, setWhastapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    const data = {
        name,
        email,
        whastapp,
        city,
        uf
    }
    try{
        const response = await api.post('/ongs', data);
        alert(`Seu ID de acesso ${response.data.id}`);

        history.push('/');
    }catch (err){
        alert(`Erro no cadastro`);
    }

  }



  return (
    <Container>
        <Content>

            <Section>
                <img src={logo} alt="Logo"/>

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>
                
                <Link to="/" className="backlink">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para o login
                </Link>

            </Section>

            <Form>
                <form onSubmit={handleRegister}>

                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input type="email"
                    placeholder="Seu email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input
                    placeholder="Whatsapp"
                    value={whastapp}
                    onChange={e => setWhastapp(e.target.value)}
                    />

                    <div className="input-group">

                        <input
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input 
                        placeholder="UF"
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        style={{ width: 80 }}
                        />

                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </Form>
        </Content>
    </Container>
  );
}
