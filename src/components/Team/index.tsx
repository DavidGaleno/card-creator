import { ITeam } from '../../interfaces/ITeam'
import Stakeholder from '../../components/Stakeholder/index'
import styled from 'styled-components'

const Team = ({ name, primaryColor, secondaryColor, stakeholders }: ITeam) => {
    const css = { backgroundColor: secondaryColor }

    return (
        (stakeholders.length > 0) ? <StyledSection className='time' style={css}>
            <StyledH3 style={{ borderColor: primaryColor }}>{name}</StyledH3>
            <StyledStakeholders>
                {stakeholders.map(stakeholder => <Stakeholder corDeFundo={primaryColor} key={stakeholder.nome} nome={stakeholder.nome} cargo={stakeholder.cargo} imagem={stakeholder.imagem} />)}
            </StyledStakeholders>
        </StyledSection>
            : ''
    )
}
const StyledSection = styled.section`
    text-align: center;
    padding: 32px;
`
const StyledH3 = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`
const StyledStakeholders = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`
export default Team