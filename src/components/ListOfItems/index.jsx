import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Item } from '../Item/index';
import { Container, List, Li, Title } from './styles';

const ListOfItemsContianer = ({
  itemsQuery,
  title = 'Mas Vendidos',
}) => {

  const [showFixed, setShowFixed] = useState(false);
  const element = useRef(null);

  useEffect(
    () => {
      const onScroll = (e) => {
        const newShowFixed = element.onmouseenter < 20;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      //document.addEventListener('scroll', onScroll)
      document.addEventListener('onmouseenter', onScroll);

      return () => document.removeEventListener('onmouseenter', onScroll);
    },
    [showFixed],
  );

  return (
    <Container>
      <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
      <List>
        {
          itemsQuery.map((item) => (
            (
              <Li key={item.id}>
                <Item {...item} />
              </Li>
            )
          ))
        }
      </List>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsQuery: state.items,
    user: state.user,
  };
};

export const ListOfItems = connect(mapStateToProps, null)(ListOfItemsContianer);
