import React, { Component } from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

interface IProps {}

interface IState {}

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
class Footer extends Component<IProps, IState> {
  static defaultProps = {};

  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://matrix.to/#/#ArchLinuxStudio:matrix.org"
                    target="_blank"
                  >
                    <List.Icon name="chat" />
                    <List.Content>[Matrix]</List.Content>
                  </List.Item>
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
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Cooperation Service" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://www.glados.rocks/landing/9FMKX-GYLMK-ZYIZW-5U3T0"
                    target="_blank"
                  >
                    <List.Icon name="plane" />
                    <List.Content>GLaDOS AirLine</List.Content>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://www.foxiyun.com/#/register?code=ORseGv8L"
                    target="_blank"
                  >
                    <List.Icon name="plane" />
                    <List.Content>Foxi Cloud AirLine</List.Content>
                  </List.Item>
                  <List.Item as="a" href="https://t.me/LLC_XMR" target="_blank">
                    <List.Icon name="google" />
                    <List.Content>Google Voice Account</List.Content>
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
                  freedom. This website does not use cookies nor collect
                  personal data.
                </p>
                <p>
                  Copyright © 2017-2022 ArchLinuxStudio, All Rights Reversed.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
