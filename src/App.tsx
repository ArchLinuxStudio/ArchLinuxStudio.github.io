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
import ES from '#/images/ES.webp';
import JA2 from '#/images/JA2.jpg';
import RS_GTA from '#/images/RS_GTA1.jpg';

interface IProps {}

interface IState {
  quotesHeight: number;
}

class App extends Component<IProps, IState> {
  state = {
    quotesHeight: 200,
  };

  componentDidMount = async () => {
    setTimeout(() => {
      this.getHeaderHight();
    }, 300);

    window.addEventListener('resize', this.resize);
  };

  resize = () => {
    this.getHeaderHight();
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resize);
  };

  //let left and right quote with same height
  getHeaderHight = async () => {
    let quote = document.getElementById('quote');
    let quotesHeight = window
      .getComputedStyle(quote!)
      .getPropertyValue('height');
    this.setState({ quotesHeight: Number(quotesHeight.split('px')[0]) });
  };

  render() {
    return (
      <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We Fight For Freedom
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Free software means that the users have the freedom to run,
                  edit, contribute to, and share the software. Thus, free
                  software is a matter of liberty, not price. We have been
                  defending the rights of all software users for the past 5
                  years. Donate and help sustain us for many more.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Value
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Value your freedom or you will lose it, teaches history.
                  'Don't bother us with politics', respond those who don't want
                  to learn.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={7}>
                <Image bordered rounded size="huge" src={RS_GTA} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button href="https://www.fsf.org/" target="_blank" size="huge">
                  Check Them Out
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '1.7em' }} id="quote">
                  "I can't in good conscience allow the U.S. government to
                  destroy privacy, internet freedom and basic liberties for
                  people around the world with this massive surveillance machine
                  they're secretly building. "
                </Header>
                <p
                  style={{
                    fontSize: '1.33em',
                    textShadow: '1px 1px 18px rgba(0, 0, 0, 1)',
                  }}
                >
                  <Image
                    size="small"
                    avatar
                    src={ES}
                    style={{
                      boxShadow:
                        '0 2px 18px rgba(0,0,0,.6),0 2px 18px rgba(0,0,0,.6)',
                    }}
                  />
                  <b>Edward Snowden</b> 2013
                </p>
              </Grid.Column>

              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header
                  as="h3"
                  style={{ fontSize: '1.7em', height: this.state.quotesHeight }}
                >
                  "Every time we witness an injustice and do not act, we train
                  our character to be passive in its presence and thereby
                  eventually lose all ability to defend ourselves and those we
                  love."
                </Header>
                <p
                  style={{
                    fontSize: '1.33em',
                    textShadow: '1px 1px 18px rgba(0, 0, 0, 1)',
                  }}
                >
                  <Image
                    avatar
                    size="small"
                    src={JA2}
                    style={{
                      boxShadow:
                        '0 2px 18px rgba(0,0,0,.6),0 2px 18px rgba(0,0,0,.6)',
                    }}
                  />
                  <b>Julian Assange</b> 2007
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Free Software Movement and Blockchain Tech
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              For the blockchain, it can be said that it extends the concept of
              the free software movement to a wider field. Such as finance,
              social activities, and possibly even the political field in the
              future. The important concept of decentralization brought by
              blockchain technology, and the cryptocurrency system that grows on
              it, have actually created a great threat to traditional powers.
              Blockchain and its cryptocurrency system are wings, and we believe
              that the free software movement will have a better future with it.
            </p>
            <Button
              as="a"
              href="https://en.wikipedia.org/wiki/Blockchain"
              target="_blank"
              size="large"
            >
              Read More
            </Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a
                href="https://github.com/ArchLinuxStudio?q=blockchain&type=all&language=&sort="
                target="_blank"
              >
                Case Studies
              </a>
            </Divider>

            <Header as="h3" style={{ fontSize: '2em' }}>
              Blockchain election tutorial
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              A Decentralized Ethereum Voting Application Tutorial. Build your
              first decentralized application, or Dapp, on the Ethereum Network
              with this tutorial!
            </p>
            <Button
              as="a"
              href="https://github.com/ArchLinuxStudio/blockchain-election-sample"
              target="_blank"
              size="large"
            >
              Learn More
            </Button>

            <Header as="h3" style={{ fontSize: '2em' }}>
              Blockchain election react tutorial
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Same as above, but use react and typescript!
            </p>
            <Button
              as="a"
              href="https://github.com/ArchLinuxStudio/blockchain-election-react"
              target="_blank"
              size="large"
            >
              Learn More
            </Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item
                      as="a"
                      href="https://t.me/FSF_Ministry_of_Truth"
                      target="_blank"
                    >
                      <List.Icon name="telegram" />
                      <List.Content>Telegram</List.Content>
                    </List.Item>

                    <List.Item
                      as="a"
                      href="https://github.com/ArchLinuxStudio"
                      target="_blank"
                    >
                      <List.Icon name="github" />
                      <List.Content>Github</List.Content>
                    </List.Item>

                    <List.Item as="a" href="" target="_blank">
                      <List.Icon name="gitlab" />
                      <List.Content>Gitlab / Stay tuned</List.Content>
                    </List.Item>

                    <List.Item
                      as="a"
                      href="https://www.youtube.com/channel/UCVO7lXKucA6z3O37WV7FG5w"
                      target="_blank"
                    >
                      <List.Icon name="youtube play" />
                      <List.Content>Youtube</List.Content>
                    </List.Item>

                    <List.Item as="a" href="" target="_blank">
                      <List.Icon name="chat" />
                      <List.Content>[Matrix] / coming soon</List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Cooperation Service" />
                  <List link inverted>
                    <List.Item
                      as="a"
                      href="https://ss.cn88.net/#/register?code=wH0Pr5l8"
                      target="_blank"
                    >
                      <List.Icon name="plane" />
                      <List.Content>White Moonlight AirLine</List.Content>
                    </List.Item>
                    <List.Item as="a" href="" target="_blank">
                      <List.Icon name="plane" />
                      <List.Content>Matrix AirLine / Stay tuned</List.Content>
                    </List.Item>
                    <List.Item as="a" href="" target="_blank">
                      <List.Icon name="google" />
                      <List.Content>
                        Google Voice Account / Stay tuned
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Free As In Freedom
                  </Header>
                  <p>
                    Free software is software that respects your freedom and the
                    social solidarity of your community. So it's free as in
                    freedom.
                  </p>
                  <p>
                    Copyright © 2017-2022 ArchLinuxStudio, All Rights Reversed.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    );
  }
}

export default App;
