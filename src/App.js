import { useState } from 'react';
import { Header } from './components/Layout/Header'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Team from './components/Team'


function App() {

  const teams = [
    {
      name: 'Coding',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX/UI Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovation and Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [stakeholders, setStakeholders] = useState([])

  const aoNovoColaboradorAdicionado = (stakeholder) => {
    debugger
    setStakeholders([...stakeholders, stakeholder])
  }

  return (
    <div className="App">
      <Header src='/images/banner.png' alt='Banner' />
      <Formulario teams={teams.map(team => team.name)} aoColaboradorCadastrado={stakeholder => aoNovoColaboradorAdicionado(stakeholder)} />
      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        stakeholders={stakeholders.filter(stakeholder => stakeholder.time === team.name)}
      />
      )
      }

    </div>
  );
}

export default App;
