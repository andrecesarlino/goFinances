import React from 'react';

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransation,
} from './styles';

interface Props {
    title: string;
    amount: string;
    lastTransation: string;
    type: 'up' | 'down' | 'total';
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({type,title, amount, lastTransation} : Props) {
    return(
        <Container type={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title>
                <Icon 
                name={icon[type]}
                type={type}
                />
            </Header>
            <Footer>
                <Amount 
                type={type}>
                    {amount}
                </Amount>
                <LastTransation
                type={type}>
                    {lastTransation}
                </LastTransation>
            </Footer>

        </Container>
    );

}