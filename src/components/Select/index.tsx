import styled from "styled-components"

interface Props {
    required: boolean
    label: string
    teams: string[]
    value: string
    onChange: (param: string) => void

}

const Select = ({ required, label, teams, value, onChange }: Props) => {
    return (
        <div>
            <StyledLabel>{label}</StyledLabel>
            <StyledSelect onChange={e => onChange(e.target.value)} required={required} value={value}>
                <option value=""></option>
                {teams.map(team => {
                    return <option key={team}>{team}</option>
                })}
            </StyledSelect>
        </div>
    )
}

const StyledSelect = styled.select`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`
const StyledLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`

export default Select