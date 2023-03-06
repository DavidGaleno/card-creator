import styled from 'styled-components'

interface Props {
    label: string
}

const Button = ({ label }: Props) => {
    return (
        <StyledButton className='botao'>
            {label}
        </StyledButton>
    )
}

const StyledButton = styled.button`

    background-color: #6278f7;
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;
    padding: 32px;
    border: none;
    cursor: pointer;
    color: #FFF;
    margin: 32px 0;

    &:hover{
        color: #95FFD4;
    }
`

export default Button