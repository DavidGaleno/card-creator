import { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Select from '../../components/Select'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={value => setNome(value)}
                />
                <Input
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onChange={value => setCargo(value)}
                />
                <Input
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={value => setImagem(value)}
                />
                <Select
                    required={true}
                    label="Time"
                    teams={props.teams}
                    value={time}
                    onChange={value => setTime(value)}
                />
                <Button label={'Create Card'} />
            </form>
        </section>
    )
}

export default Formulario