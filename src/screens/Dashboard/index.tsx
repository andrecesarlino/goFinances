import React from 'react';

import {    
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGretting,
    UserName,
    UserWrapper,
    Icon
} from './styles';

export function Dashboard() {

    return (
        <Container>            
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={
                            {uri: 'https://avatars.githubusercontent.com/u/4925220?v=4'}
                            }/>
                        <User>
                            <UserGretting>Olá, </UserGretting>
                            <UserName>Andre</UserName>
                        </User>
                    </UserInfo>
                    
                    <Icon name="power"/>
                </UserWrapper>
            </Header>            
        </Container>
    );

}

