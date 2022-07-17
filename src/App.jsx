import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactLoading from 'react-loading';
import { ThemeNormal, ThemeDark } from './components/themeColor/themeColors';
import { reducer } from './redux/reducer';
import { Home } from './pages/home/index';
import { Detail } from './pages/detail/index';
import { FormRegister } from './components/FormRegister';
import initialState from '../initialState.json';
import { Layout } from './components/Layout';
import GlobalStyle from './GlobalStyled';

const App = () => {
  const [activeDarkmode, setActiveDarkmode] = useState(false);
  const [search, setSearch] = useState('samsung');
  const [items, setItems] = useState(false);
  const API = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=24`;

  useEffect(() => {
    fetch(API).then((res) => res.json()).then((data) => setItems(data));

  }, [search]);
  initialState.items = items.results;
  const store = createStore(reducer, initialState);

  const Detail = React.lazy(() => import('./pages/detail'));

  return (

    <React.Suspense fallback={<div />}>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            {
              items ? (
                <Layout setActive={setActiveDarkmode} active={activeDarkmode} setSearch={setSearch}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/detail/:detailId' component={Detail} />
                  <Route exact path='/register' component={FormRegister} />
                  <Route exact path='/detail/undefined' component={Home} />
                  <Redirect from='/detail/' to='/' />
                </Layout>
              ) : console.log('LOADING!')
            }
          </Switch>
        </Provider>
      </BrowserRouter>
      {
        activeDarkmode ? <GlobalStyle themes={ThemeDark} /> : <GlobalStyle themes={ThemeNormal} />
      }
    </React.Suspense>
  );
};

export default App;
