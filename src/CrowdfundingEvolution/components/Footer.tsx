import { Img } from 'remotion';
import styled from 'styled-components';
import neutralMandarine from '../../../assets/characters/Neutral-Mandarine.png';
import neutralMimo from '../../../assets/characters/Neutral-Mimo.png';

interface Props {
    currentAmount: number;
}

export const Footer: React.FC<Props> = ({ currentAmount }) => {
    return (
        <Container>
            <StyledImg src={neutralMimo} />
            <CentalTextContainer>
                {`déjà ${currentAmount}€`}
                <LighterText>Merci !</LighterText>
            </CentalTextContainer>
            <StyledImg src={neutralMandarine} />
        </Container>
    );
};

const Container = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
`;

const StyledImg = styled(Img)`
    margin-left: 12px;
`;

const CentalTextContainer = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 84px;
    color: ${({ theme }) => theme.colors.secondary2};
`;

const LighterText = styled.span`
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.secondary};
`;
