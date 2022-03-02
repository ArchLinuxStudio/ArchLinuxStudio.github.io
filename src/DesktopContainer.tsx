import React, { Component } from 'react';
import HomepageHeading from '#/HomepageHeading';
import { Media } from '#/const';
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
  Visibility,
} from 'semantic-ui-react';

interface IProps {}

interface IState {
  fixed: boolean;
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component<IProps, IState> {
  static defaultProps = {};

  state = {
    fixed: false,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  componentDidMount = async () => {};

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Placeholder</Menu.Item>
                <Menu.Item as="a">Placeholder</Menu.Item>
                <Menu.Item as="a">Placeholder</Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    href="https://en.cryptobadges.io/donate/1Lth3oca4WnMnTnwHBcDLkEqniA2pBxkeC"
                    target="_blank"
                    inverted={!fixed}
                  >
                    Donate BTC
                  </Button>
                  <Button
                    as="a"
                    href="https://en.cryptobadges.io/donate/0x5A218a8d570d9947f42e0a4916ece7a60A181c2d"
                    target="_blank"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                  >
                    Donate ETH
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

export default DesktopContainer;