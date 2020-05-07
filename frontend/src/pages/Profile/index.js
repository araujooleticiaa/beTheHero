import React, { useState ,useEffect} from 'react';

import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import { Container } from './styles';
import logo from '../../assets/logo.svg';


export default function Profile() {

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);
  
  async function handleDelete(id){

    try{
      await api.delete(`incidents/${id}`,{
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id));
    }catch(err){
      alert('Erro ao deletar caso, tente novamente')
    }
  }

  function handleLogout(){
      localStorage.clear();
      history.push('/')
  }

  return (
    <Container>
        <header>
            <img src={logo} alt="logo"/>
            <span>Bem vindo(a), {ongName}</span>

            <Link to="/incidents/new" className="button">Cadastrar novo caso!</Link>

            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041"/>
            </button>
        </header>

        <h1>Casos cadastrados</h1>
        
        <ul>
        {incidents.map(incident => (
          <li key={incident.id}>

            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>R$ {incident.value}</p>

            <button onClick={() => handleDelete(incident.id)} type="submit">
              <FiTrash2 size={18} color="#e02041" />
            </button>

          </li>
        ))}
        </ul>
    </Container>
  );
}
