import React, { Component } from 'react';
import DesktopContainer from '#/DesktopContainer';
import MobileContainer from '#/MobileContainer';
import { MediaContextProvider } from '#/const';
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

interface IProps {}

interface IState {}

/* Heads up!
 * For large applications it may not be best option to put all page into these containers at
 * they will be rendered twice for SSR.
 */

class ResponsiveContainer extends Component<IProps, IState> {
  static defaultProps = {};

  state = {};

  render() {
    return (
      <MediaContextProvider>
        <DesktopContainer>{this.props.children}</DesktopContainer>
        <MobileContainer>{this.props.children}</MobileContainer>
      </MediaContextProvider>
    );
  }
}

export default ResponsiveContainer;
