import React, { Component } from 'react';
import HomepageHeading from '#/HomepageHeading';
import { Media } from '#/const';
import CustomRouter from '#/CustomRouter';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';

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
import { history } from '#/const';
import { scrollToTopAndRoute } from '#/utils';
import Homepage from '#/Homepage';
import Blog from '#/Blog';
import { Route } from 'react-router';
import { Router, Routes } from 'react-router-dom';

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

  componentDidMount = async () => {
    setTimeout(() => {
      toast(
        {
          title: 'Hi~',
          time: 3000,
          icon: 'heart',
          description: 'Use PC access for a better experience',
        },
        () => console.log('toast closed'),
        () => console.log('toast clicked'),
        () => console.log('toast dismissed')
      );
    }, 500);
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    return (
      <CustomRouter history={history}>
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
              <Menu.Item as="a" href="/" active>
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
              <Menu.Item onClick={() => scrollToTopAndRoute('/blog_list')}>
                BLOG
              </Menu.Item>
              <Menu.Item as="a">Placeholder_hidden</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign="center"
                style={{ minHeight: 20, padding: '1em 0em' }}
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
                {/* <HomepageHeading mobile /> */}
              </Segment>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Media>
        <SemanticToastContainer position="bottom-left" />
      </CustomRouter>
    );
  }
}

export default MobileContainer;
