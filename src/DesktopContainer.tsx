import React, { Component } from 'react';
import {
  productListPathName,
  foundationPathName,
  homePathName,
  Media,
} from '#/const';
import {
  Button,
  Container,
  Menu,
  Segment,
  Popup,
  Visibility,
  MenuItemProps,
} from 'semantic-ui-react';
import CustomRouter from '#/CustomRouter';
import { history } from '#/const';
import { scrollToTopAndRoute } from '#/utils';
interface IProps {}

interface IState {
  activeItem: string;
  fixed: boolean;
  muteVideo: boolean;
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component<IProps, IState> {
  static defaultProps = {};

  state = {
    activeItem: homePathName,
    fixed: false,
    muteVideo: true,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  componentDidMount = async () => {
    let pathname = window.location.hash;

    if (pathname.length > 1) {
      pathname = pathname.split('#')[1];
      this.setState({
        activeItem: pathname,
      });
    }
  };

  handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    menuItemProps: MenuItemProps
  ) => {
    this.setState({ activeItem: menuItemProps.name! });
    scrollToTopAndRoute(menuItemProps.name!);
  };

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <CustomRouter history={history}>
        <Media greaterThan="mobile">
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              style={{
                minHeight: 60,
                //no padding below video
                padding: '0em 0em',
                display: 'flex',
                flexDirection: 'column',
              }}
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
                  <Menu.Item
                    as="a"
                    href="/"
                    active={this.state.activeItem === homePathName}
                  >
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
                    content="Linux Network Programming And Encryption"
                    inverted
                    on="hover"
                  />
                  <Menu.Item
                    name={productListPathName}
                    onClick={this.handleMenuItemClick}
                    active={this.state.activeItem === productListPathName}
                  >
                    PRODUCTS
                  </Menu.Item>

                  <Menu.Item
                    position="right"
                    name={foundationPathName}
                    active={this.state.activeItem === foundationPathName}
                    onClick={this.handleMenuItemClick}
                  >
                    <Button inverted={!fixed}>
                      ArchLinuxStudio Foundation
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
        </Media>
        <Media greaterThan="mobile">{children}</Media>
      </CustomRouter>
    );
  }
}

export default DesktopContainer;
