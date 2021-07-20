import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {    
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGretting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transations,
    Title,
    TransationList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {   
  
const data: DataListProps[] = [
    {
    id: '1',
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
  {
    id: '2',
    type: 'negative',
    title: "Hamburgueria Pizzy",
    amount: "R$ 59,00",
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: "03/04/2020",
  },
  {
    id: '3',
    type: 'negative',
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    category: {
      name: 'Casa',
      icon: 'shopping-bag'
    },
    date: "01/04/2020",
  }
];

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

            <HighlightCards>
                <HighlightCard
                type="up"
                title="Entradas"
                amount="R$ 17.400,00"
                lastTransation="Última entrada dia 13 de abril"
                />
                <HighlightCard
                type="down"
                title="Saídas"
                amount="R$ 1.259,00"
                lastTransation="Última saída dia 03 de maio"
                />  
                <HighlightCard 
                type="total"
                title="Total"
                amount="R$ 16.141,00"
                lastTransation="01 à 16 de abril"
                />
            </HighlightCards>
                      
            <Transations>
                <Title>Listagem</Title>

                <TransationList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <TransactionCard data={item} />}            
                
                />

            </Transations>

        </Container>
    );
}

