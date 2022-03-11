import { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Item,
  Label,
  Segment,
} from 'semantic-ui-react';

import arch from '#/images/ar1.png';

import V from '#/images/v.jpg';

import cnetwork from '#/images/c-network.png';
import bash from '#/images/bash.svg';
import butterfly from '#/images/butterfly.webp';
import dick from '#/images/dick.jpg';
import M from '#/images/M.png';
interface IProps {}

interface IState {}

class ProductList extends Component<IProps, IState> {
  static defaultProps = {};

  render() {
    return (
      <div style={{ minHeight: '80vh' }}>
        <Segment style={{ padding: '6em 0em' }} vertical>
          <Header
            as="h1"
            content="Presented by ArchLinuxStudio"
            textAlign="center"
            style={{ fontSize: '2.3em' }}
          />
          <Container>
            <Divider
              as="h1"
              className="header"
              horizontal
              style={{ margin: '1em 0em', textTransform: 'uppercase' }}
            >
              Tutorial
            </Divider>

            <Item.Group divided>
              <Item>
                <Item.Image src={arch}></Item.Image>
                <Item.Content>
                  <Item.Header as="a">Arch Linux Tutorial</Item.Header>
                  <Item.Meta>
                    <span>Start-up projects of ArchLinuxStudio</span>
                  </Item.Meta>
                  <Item.Description>
                    This project takes the reader on a journey into the world of
                    free software by teaching them to install and use arch
                    linux. Read this tutorial and you will learn how to secure
                    the end devices you use.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://archlinuxstudio.github.io/ArchLinuxTutorial/#/"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>censorship-circumvention</Label>
                    <Label>arch linux install</Label>
                    <Label>v2ray</Label>
                    <Label>linux-desktop</Label>
                    <Label>linux daily use</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={V} />
                <Item.Content>
                  <Item.Header as="a">
                    Modern Privacy Protection Guide
                  </Item.Header>
                  <Item.Meta>
                    <span>Your privacy is vital</span>
                  </Item.Meta>
                  <Item.Description>
                    In today's dangerous Internet environment, especially in the
                    context of all-round surveillance by authoritarian
                    governments, people must learn how to protect their privacy.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://archlinuxstudio.github.io/ModernSecurityProtectionGuide/#/"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>censorship-circumvention</Label>
                    <Label>privacy</Label>
                    <Label>security</Label>
                    <Label>digital-privacy</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={cnetwork} />
                <Item.Content>
                  <Item.Header as="a">
                    Linux Network Programming And Encryption
                  </Item.Header>
                  <Item.Meta>
                    <span>Arm yourself from the root</span>
                  </Item.Meta>
                  <Item.Description>
                    It is not enough to learn to use the tools to break through
                    Internet censorship, our readers should learn how to do web
                    programming to break through the Internet blockade, which is
                    the most fundamental way.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://archlinuxstudio.github.io/LinuxNetworkProgrammingAndEncryption/#/"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>censorship-circumvention</Label>
                    <Label>network-programming</Label>
                    <Label>mbedtls</Label>
                    <Label>cryptography</Label>
                    <Label>shadowsocks</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={bash} />
                <Item.Content>
                  <Item.Header as="a">Linux Shell Tutorial</Item.Header>
                  <Item.Meta>
                    <span>Shell is basic</span>
                  </Item.Meta>
                  <Item.Description>
                    Learning the Linux command line and shell scripting is the
                    basis for using linux.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://archlinuxstudio.github.io/ShellTutorial/#/"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>bash</Label>
                    <Label>shell</Label>
                    <Label>linux command</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>

            <Divider
              as="h1"
              className="header"
              horizontal
              style={{ margin: '1em 0em', textTransform: 'uppercase' }}
            >
              SOFTWARE
            </Divider>

            <Item.Group divided>
              <Item>
                <Item.Image src={butterfly} />
                <Item.Content>
                  <Item.Header as="a">Shadow Butterfly</Item.Header>
                  <Item.Meta>
                    <span>
                      Software written in c that breaks internet censorship.
                    </span>
                  </Item.Meta>
                  <Item.Description>
                    This software teaches you step by step, from easy to
                    difficult, how to write software that breaks through
                    internet censorship and blockades.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://github.com/ArchLinuxStudio/ShadowButterfly"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>teaching</Label>
                    <Label>c language</Label>
                    <Label>censorship-circumvention</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={arch} />
                <Item.Content>
                  <Item.Header as="a">archlinuxstudio.github.io</Item.Header>
                  <Item.Meta>
                    <span>Our website is free software!</span>
                  </Item.Meta>
                  <Item.Description>
                    Our website is free software, under the GPL license, and you
                    can modify it on this basis.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://archlinuxstudio.github.io"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>website</Label>
                    <Label>react</Label>
                    <Label>typescript</Label>
                    <Label>front end programming</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={M} />
                <Item.Content>
                  <Item.Header as="a">mproxy</Item.Header>
                  <Item.Meta>
                    <span>small and nice.</span>
                  </Item.Meta>
                  <Item.Description>
                    mproxy is a lightweight http proxy server implementation. It
                    is created by examplecode, and now forked and maintained by
                    ArchLinuxStudio.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://github.com/ArchLinuxStudio/mproxy"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>internet-censorship</Label>
                    <Label>gfw</Label>
                    <Label>censorship-circumvention</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={dick} />
                <Item.Content>
                  <Item.Header as="a">Raindrop Dick</Item.Header>
                  <Item.Meta>
                    <span>Amazing project name</span>
                  </Item.Meta>
                  <Item.Description>
                    A tui interface for V2ray, subscription only.
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      floated="right"
                      color="teal"
                      as="a"
                      href="https://github.com/ArchLinuxStudio/RaindropDick"
                      target="_blank"
                    >
                      Check
                      <Icon name="chevron right" />
                    </Button>
                    <Label>v2ray</Label>
                    <Label>tui</Label>
                    <Label>censorship-circumvention</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default ProductList;
