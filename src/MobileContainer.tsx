import { Component } from 'react';

import {
  blogListPathName,
  foundationPathName,
  homePathName,
  Media,
} from '#/const';
import CustomRouter from '#/CustomRouter';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';

import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Popup,
  Sidebar,
  MenuItemProps,
} from 'semantic-ui-react';
import { history } from '#/const';
import { scrollToTopAndRoute } from '#/utils';

interface IProps {}

interface IState {
  activeItem: string;
  sidebarOpened: boolean;
}

class MobileContainer extends Component<IProps, IState> {
  static defaultProps = {};

  state = {
    activeItem: homePathName,
    sidebarOpened: false,
  };
  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  componentDidMount = async () => {
    let pathname = window.location.pathname;
    if (pathname.length > 1) {
      this.setState({
        activeItem: pathname,
      });
    }

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

  handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    menuItemProps: MenuItemProps
  ) => {
    this.setState({ activeItem: menuItemProps.name!, sidebarOpened: false });
    scrollToTopAndRoute(menuItemProps.name!);
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
                    active={this.state.activeItem === homePathName}
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
              <Menu.Item
                name={blogListPathName}
                onClick={this.handleMenuItemClick}
                active={this.state.activeItem === blogListPathName}
              >
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
                    <Menu.Item
                      position="right"
                      name={foundationPathName}
                      onClick={this.handleMenuItemClick}
                      active={this.state.activeItem === foundationPathName}
                    >
                      <Button inverted>ArchLinuxStudio Foundation</Button>
                    </Menu.Item>
                  </Menu>
                </Container>
                {/* <HomepageHeading mobile /> */}
              </Segment>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
          <SemanticToastContainer position="bottom-left" />
        </Media>
      </CustomRouter>
    );
  }
}

export default MobileContainer;
