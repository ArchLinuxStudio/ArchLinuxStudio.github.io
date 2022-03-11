import { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';

interface IProps {}

interface IState {}

class Foundation extends Component<IProps, IState> {
  static defaultProps = {};

  render() {
    return (
      <div style={{ minHeight: '80vh' }}>
        <Segment style={{ padding: '6em 0em' }} vertical>
          <Container>
            <Header as="h1" style={{ fontSize: '2.3em' }} textAlign="center">
              Sustainable Support for ArchLinuxStudio
            </Header>
            <p style={{ fontSize: '1.33em', padding: '1em 0em 0em 0em' }}>
              ArchLinuxStudio is committed to achieving the goals of the free
              software movement. At present we mainly focus on four aspects.
              First, the freedom of the terminal devices that people use.
              Second, people's freedom to protect their privacy. Third, people's
              freedom to use the Internet. Fourth, the freedom of people to own
              and protect their private property.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              Development in ArchLinuxStudio has involved countless volunteered
              man-hours to not only produce many tutorials and free softwares
              but also keep it up-to-date and compatible with bleeding-edge
              technology.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              ArchLinuxStudio must be able to continue to provide the very best
              open-source software stack, up-to-date and accurate tutorials, and
              your contribution can make that happen. Support from you will fuel
              the future development of ArchLinuxStudio and the roll out of new
              tutorials and free softwares.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              Supporters of the ArchLinuxStudio Foundation will be featured on
              our website and will be helping to bolster the steady growth of
              free software and ArchLinuxStudio.{' '}
            </p>
            <p style={{ fontSize: '1.33em' }}>
              If you are interested in supporting the Foundation, you can donate
              cryptocurrency directly by clicking the button below. After that,
              you can email us(archlinuxstudio@tutamail.com) the donation
              information, along with any personal or company information you
              need to featured on our website.
            </p>
            <Grid columns={4} doubling>
              <Grid.Column>
                <Button
                  style={{ backgroundColor: '#f7931a', color: 'white' }}
                  as="a"
                  href="https://en.cryptobadges.io/donate/1Lth3oca4WnMnTnwHBcDLkEqniA2pBxkeC"
                  target="_blank"
                  fluid
                >
                  <Icon name="btc"></Icon>Donate BTC
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                  style={{ backgroundColor: '#151c2f', color: 'white' }}
                  as="a"
                  href="https://en.cryptobadges.io/donate/0x5A218a8d570d9947f42e0a4916ece7a60A181c2d"
                  target="_blank"
                  fluid
                >
                  <Icon name="ethereum"></Icon>Donate ETH
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                  color="grey"
                  as="a"
                  href="https://en.cryptobadges.io/donate/LdJXzaSzzrAxfKJdj5effRLcC7k1TbuXJ8"
                  target="_blank"
                  fluid
                >
                  <Icon name="ethereum"></Icon>Donate LTC
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                  color="teal"
                  as="a"
                  href="mailto:archlinuxstudio@tutamail.com"
                  target="_blank"
                  fluid
                >
                  <Icon name="mail"></Icon>Send Email
                </Button>
              </Grid.Column>
            </Grid>
            <Divider
              as="h1"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              About Us
            </Divider>
            <p style={{ fontSize: '1.33em' }}>
              ArchLinuxStudio was first made known to the public through the
              ArchLinuxTutorial. In fact, we want to use ArchLinuxTutorial as an
              entry point to lead more people to know and walk into the world of
              free software.
            </p>

            <p style={{ fontSize: '1.33em' }}>
              To secure the future development of ArchLinuxStudio it has become
              incumbent upon the project to organise a process for accepting the
              donations of those entities who wish to contribute to the efforts
              of ArchLinuxStudio.
            </p>

            <p style={{ fontSize: '1.33em' }}>
              The ultimate goal of ArchLinuxStudio is to provide a full range of
              free software support for people in all aspects of their daily
              lives. The Free Software Foundation has already made a great
              contribution to this goal, but we believe that more advocacy and
              efforts are needed from more community organisations, and
              ArchLinuxStudio is one of them.
            </p>

            <Divider></Divider>

            <p style={{ fontSize: '1.33em' }}>
              Donations to ArchLinuxStudio Foundation will be used only on
              endeavours which help to fulfil that goal and only on endeavours
              related to the ArchLinuxStudio Project.
            </p>

            <p style={{ fontSize: '1.33em' }}>
              Such endeavours include:
              <li>Development of new ArchLinuxStudio project</li>
              <li>
                Production of training/tutorial material (Video,
                documentation...)
              </li>
              <li>Promotion of ArchLinuxStudio (events, hackathon, goodies)</li>
            </p>
            <p style={{ fontSize: '1.33em' }}>
              Donations shall not be used for:
              <li>
                Developing Proprietary Software and Proprietary Software
                Tutorials
              </li>
              <li>
                Add support for proprietary software to existing tutorials and
                software
              </li>
            </p>
            <Divider></Divider>
            <p style={{ fontSize: '1.33em' }}>
              The costs associated with operating the supporting structure, such
              as legal and accountancy fees, taxes, establishment fees and
              server costs will be covered by donations to the foundation.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              The custodians of the Foundation shall undertake to vote upon any
              endeavour which may be in conflict with another priority. The main
              admin of ArchLinuxStudio, shall possess two votes for the purpose
              of breaking a tie.
            </p>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Foundation;
