import { Component } from 'react';
import ResponsiveContainer from '#/ResponsiveContainer';

import Footer from '#/Footer';
import Homepage from './Homepage';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import Blog from './Blog';
import Foundation from './Foundation';
import { foundationPathName, blogListPathName } from './const';
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
            <Route path={blogListPathName} element={<Blog />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </ResponsiveContainer>
        <Footer />
      </>
    );
  }
}

export default App;
