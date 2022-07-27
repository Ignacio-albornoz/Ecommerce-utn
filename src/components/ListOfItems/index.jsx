import React, { useEffect, useState, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import { Item } from '../Item/index';

import { Container, List, Li, Title } from './styles';

const ListOfItemsContianer = ({
  itemsQuery,
  title = '',
  search = 'zanella',
  searchValue,
}) => {

  const [filterData, setFilterData] = useState();

  useEffect(
    () => {
      searchValue ? setFilterData(itemsQuery.filter((item) => item.title.toLowerCase().includes(searchValue))) : null;
    }, [searchValue],
  );
  return (
    <Container>
      <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
      <List>
        {
          filterData ?
            filterData.map((item) => (
              (
                <Li key={item.id}>
                  <Item {...item} />
                </Li>
              )
            )) :
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
    searchValue: state.searchValue,
  };
};

export const ListOfItems = connect(mapStateToProps, null)(ListOfItemsContianer);
