import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import ReactLoading from 'react-loading';
import { db } from '../../firebase/firebaseConfig';
import { DetailInfo } from '../../components/DetailInfo/index';
import { CarouselItem } from '../../components/CarouselItem';
import { DetailWrap, TitleItem } from './styles';

const DetailContianer = ({ items, detailId }) => {
  const [item, setItem] = useState(false);
  const [itemCart, setItemCart] = useState([]);

  useEffect(() => {
    const data = (items.filter((item) => item.id === detailId));
    setItem(data[0]);

    window.scrollTo(0, 0);

    const getItemCart = async () => {
      const itemCartCol = collection(db, 'itemCart');
      const itemSnapshot = await getDocs(itemCartCol);
      const getItem = itemSnapshot.docs.map((doc) => doc.data());
      setItemCart(getItem);
    };
    getItemCart();

  }, []);

  return (
    <DetailWrap>
      {
        item ? (
          <>
            <TitleItem>{item.title}</TitleItem>
            <CarouselItem {...item} />
            <DetailInfo {...item} />
          </>
        ) :
          <ReactLoading type='cubes' />
      }
    </DetailWrap>
  );
};

const mapStateToProps = (state, props) => {
  return {
    items: state.items,
    detailId: props.match.params.detailId,
  };
};

const Detail = connect(mapStateToProps, null)(DetailContianer);

export default Detail;
