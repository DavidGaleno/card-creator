import styled from "styled-components"

interface Props {
    src: string,
    alt?: string
}

export const Header = ({ src, alt }: Props) => {
    return (
        <StyledHeader>
            <StyledImg src={src} alt={alt || 'Image'} />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #6278F7;
    text-align: center;
`
const StyledImg = styled.img`
    max-width: 100%;
`