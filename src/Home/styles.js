import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.background};
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.color};
`;

export const Description = styled.Text`
    font-style: italic;
    color: #121212;
    background-color: #E9E9E9;
    padding: 8px 20px;
    margin-top: 12px;
`;

// export const Container = styled.View``;

// export const Container = styled.View``;