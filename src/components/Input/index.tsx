import styled from 'styled-components'
interface Props {
    label: string
    value: string
    placeholder: string
    required: boolean
    onChange: (param: string) => void

}

const Input = ({ label, value, placeholder, required, onChange }: Props) => {

    const placeholderModificada = `${placeholder}...`

    return (
        <Container>
            <StyledLabel>
                {label}
            </StyledLabel>
            <StyledInput value={value} onChange={e => onChange(e.target.value)} required={required} placeholder={placeholderModificada} />
        </Container>
    )
}

const Container = styled.div`
    margin: 24px 0;
`

const StyledInput = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
    
    &:focus{
        outline: none;
    }
`
const StyledLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`

export default Input