import { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

import ES from '#/images/ES.webp';
import JA2 from '#/images/JA2.jpg';
import RS_GTA from '#/images/RS_GTA1.jpg';
import HomepageHeading from '#/HomepageHeading';
import './homepage_video.css';
import Loading from '#/images/loading.gif';
import FSF30 from '#/videos/FSF_30_720p.webm';

interface IProps {}

interface IState {
  muteVideo: boolean;

  quotesHeight: number;
}

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
class Homepage extends Component<IProps, IState> {
  static defaultProps = {};

  state = {
    quotesHeight: 200,
    muteVideo: true,
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

  handleMuteVideoClicked = () => {
    this.setState({ muteVideo: !this.state.muteVideo });
  };

  render() {
    return (
      <>
        <div
          className="homepage-video-wrapper"
          style={{
            minHeight: 600,
            alignItems: 'center',
            flex: 1,
          }}
        >
          <video
            muted={this.state.muteVideo}
            autoPlay={true}
            loop={true}
            playsInline={true}
            src={FSF30}
            poster={Loading}
          ></video>

          <div className="header">
            <HomepageHeading />
          </div>
          <Icon
            name={this.state.muteVideo ? 'volume off' : 'volume up'}
            size="big"
            onClick={this.handleMuteVideoClicked}
            style={{
              color: 'white',
              position: 'absolute',
              bottom: 50,
              right: 50,
              textShadow: '1px 1px 18px rgba(0, 0, 0, 1)',
            }}
          />
        </div>

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
              rel="noreferrer"
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
                rel="noreferrer"
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
      </>
    );
  }
}

export default Homepage;
