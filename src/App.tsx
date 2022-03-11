import React, { Component } from 'react';
import ResponsiveContainer from '#/ResponsiveContainer';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import Footer from '#/Footer';
import Homepage from './Homepage';
import { Route } from 'react-router';
import { Router, Routes } from 'react-router-dom';
import Blog from './Blog';
import Foundation from './Foundation';
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
            <Route path="/foundation" element={<Foundation />}></Route>
            <Route path="/blog_list" element={<Blog />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </ResponsiveContainer>
        <Footer />
      </>
    );
  }
}

export default App;
