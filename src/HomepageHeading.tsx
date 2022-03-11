import { Component } from 'react';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

interface IProps {
  mobile: boolean;
}

interface IState {}

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
class HomepageHeading extends Component<IProps, IState> {
  static defaultProps = {
    mobile: false,
  };

  componentDidMount = async () => {};

  render() {
    return (
      <Container text>
        <Header
          as="h1"
          content="Arch Linux Studio"
          inverted
          style={{
            fontSize: this.props.mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            //mobile has no video
            marginTop: this.props.mobile ? '1.5em' : '0em',
          }}
        />
        <Header
          as="h2"
          content="So it's free as in freedom."
          inverted
          style={{
            fontSize: this.props.mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: this.props.mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button
          href="https://github.com/ArchLinuxStudio"
          target="_blank"
          primary
          size="huge"
        >
          Github
          <Icon name="arrow right" />
        </Button>
      </Container>
    );
  }
}

export default HomepageHeading;
