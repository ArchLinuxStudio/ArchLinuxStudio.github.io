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
  Popup,
  Sidebar,
} from 'semantic-ui-react';

interface IProps {}

interface IState {
  sidebarOpened: boolean;
}

class MobileContainer extends Component<IProps, IState> {
  static defaultProps = {};

  state = {
    sidebarOpened: false,
  };
  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  componentDidMount = async () => {};

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    return (
      //TODO the "as" seems useless
      // <Media as={Sidebar.Pushable} at="mobile">
      <Media at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Popup
              trigger={
                <Menu.Item
                  as="a"
                  href="https://archlinuxstudio.github.io/ArchLinuxTutorial/#/"
                  target="_blank"
                >
                  ALT
                </Menu.Item>
              }
              content="Arch Linux Tutorial"
              inverted
              on="hover"
            />
            <Popup
              trigger={
                <Menu.Item
                  as="a"
                  href="https://archlinuxstudio.github.io/ModernSecurityProtectionGuide/#/"
                  target="_blank"
                >
                  MPPG
                </Menu.Item>
              }
              content="Modern Privacy Protection Guide"
              inverted
              on="hover"
            />
            <Popup
              trigger={
                <Menu.Item
                  as="a"
                  href="https://archlinuxstudio.github.io/LinuxNetworkProgrammingAndEncryption/#/"
                  target="_blank"
                >
                  LNPE
                </Menu.Item>
              }
              flowing
              content="Linux Network Programming And Encryption "
              inverted
              on="hover"
            />
            <Menu.Item as="a">Placeholder_hidden</Menu.Item>
            <Menu.Item as="a">Placeholder_hidden</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button
                      as="a"
                      href="https://en.cryptobadges.io/donate/1Lth3oca4WnMnTnwHBcDLkEqniA2pBxkeC"
                      target="_blank"
                      inverted
                    >
                      Donate BTC
                    </Button>
                    <Button
                      as="a"
                      href="https://en.cryptobadges.io/donate/0x5A218a8d570d9947f42e0a4916ece7a60A181c2d"
                      target="_blank"
                      inverted
                      style={{ marginLeft: '0.5em' }}
                    >
                      Donate ETH
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

export default MobileContainer;
