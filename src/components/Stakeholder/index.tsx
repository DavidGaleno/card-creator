import { IStakeholder } from 'interfaces/IStakeholder'
import styled from 'styled-components'

const Stakeholder = ({ nome, imagem, cargo, corDeFundo }: IStakeholder) => {
    return (<Container>
        <StyledHeader className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <StyledImg src={imagem} alt={nome} />
        </StyledHeader>
        <StyledFooter>
            <StyledH4>{nome}</StyledH4>
            <StyledH5>{cargo}</StyledH5>
        </StyledFooter>
    </Container>)
}
const Container = styled.div`
    width: 280px;
`
const StyledHeader = styled.div`
    background-color:  #F0F0F0;
    border-radius: 10px 10px 0px 0px;
`

const StyledImg = styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
`

const StyledFooter = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
`
const StyledH4 = styled.h4`
    color: #6278F7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`
const StyledH5 = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;
`
export default Stakeholder