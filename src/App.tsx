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
import Kawaii from '#/images/kawaii.jpg';
import WhiteImages from '#/images/white-image.png';
import RS_GTA from '#/images/RS_GTA1.jpg';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  componentDidMount = async () => {};

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
                  years. Help sustain us for many more; donate and become an
                  associate member today.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Placeholder
                </Header>
                <p style={{ fontSize: '1.33em' }}>Placeholder</p>
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
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "Placeholder"
                </Header>
                <p style={{ fontSize: '1.33em' }}>Placeholder</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "Placeholder"
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src={WhiteImages} />
                  <b>Placeholder Who</b> Placeholder
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href="#">Case Studies</a>
            </Divider>

            <Header as="h3" style={{ fontSize: '2em' }}>
              Did We Tell You About Our Projects?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but it's really true.
            </p>
            <Button as="a" size="large">
              I'm Still Quite Interested
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
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Placeholder</List.Item>
                    <List.Item as="a">Placeholder</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Footer Header
                  </Header>
                  <p>Placeholder</p>
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
