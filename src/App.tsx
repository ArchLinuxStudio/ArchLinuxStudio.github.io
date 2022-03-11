import { Component } from 'react';
import ResponsiveContainer from '#/ResponsiveContainer';

import Footer from '#/Footer';
import Homepage from './Homepage';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import ProductList from './ProductList';
import Foundation from './Foundation';
import { foundationPathName, productListPathName } from './const';
interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  state = {};

  componentDidMount = async () => {};

  render() {
    return (
      <>
        <ResponsiveContainer>
          <Routes>
            <Route path={foundationPathName} element={<Foundation />}></Route>
            <Route path={productListPathName} element={<ProductList />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </ResponsiveContainer>
        <Footer />
      </>
    );
  }
}

export default App;
