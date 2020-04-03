import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';

import { Container, Content, Section, Form } from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

export default function Register() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncidents(e){
        e.preventDefault();
        
        const data = {
            title,
            description,
            value,
        }
        try{
            await api.post('incidents', data,{
                headers:{
                    Authorization: ongId,
                }
            })
            history.push('/profile')
        }catch(err){
            alert('erro ao cadastrar caso, tente novamente');
        }
    }

  return (
    <Container>
        <Content>

            <Section>
                <img src={logo} alt="Logo"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso!</p>
                
                <Link to="/profile" className="backlink">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para casos
                </Link>

            </Section>

            <Form>
                <form onSubmit={handleNewIncidents}>
                    <input
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                    placeholder="Descrição..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />

                    <input
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </Form>
        </Content>
    </Container>
  );
}
