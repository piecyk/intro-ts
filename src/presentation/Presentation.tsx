import React from 'react';
import {transform} from '@babel/standalone';
import {Emoji} from 'emoji-mart';
import {Portal} from 'react-portal';

// Import Spectacle Core tags
import {BlockQuote, Cite, Deck, Heading, Quote, Slide, Text} from 'spectacle';

import ComponentPlayground from 'presentation/ui/ComponentPlayground';
import WeAreHiring from 'presentation/ui/Scalac/WeAreHiring';
import Scalac from 'presentation/ui/Scalac/Scalac';
import Avatar from 'presentation/ui/Avatar';
import ExternalLink from 'presentation/ui/ExternalLink';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Require CSS
require('normalize.css');

// assets
import MePicture from 'public_static/assets/me.jpg';
import ScalacLogoPicture from './ui/Scalac/ScalacLogo.png';

const MyEmoji = ({id, size}: {id: string; size: number}) => (
  <Emoji emoji={{id, skin: 1}} size={size} set={'google'} />
);
const MyMyEmoji64 = ({id}: {id: string}) => <MyEmoji id={id} size={64} />;
const MyMyEmoji48 = ({id}: {id: string}) => <MyEmoji id={id} size={48} />;
const MyMyEmoji32 = ({id}: {id: string}) => <MyEmoji id={id} size={32} />;

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const transformCode = (code: string) => {
  return transform(code, {presets: ['typescript', 'react']}).code;
};

export default class Presentation extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <Deck
          transition={['fade', 'slide']}
          transitionDuration={500}
          theme={theme}
        >
          <Slide transition={['fade']} bgColor="primary">
            <Heading fit caps lineHeight={1} textColor="secondary">
              Introduction to
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              TypeSript
            </Text>
            <Text
              textSize="1.5em"
              textColor="secondary"
              bold
              margin="40px auto 0"
            >
              <ExternalLink href={'https://twitter.com/piecu'}>
                @piecu
              </ExternalLink>
              |
              <ExternalLink href={'https://github.com/piecyk'}>
                github.com/piecyk
              </ExternalLink>
            </Text>
            <Text textSize="1em" textColor="secondary" margin="10px auto 0">
              27.02.2018, Rzeszów JavaScript Developers
            </Text>
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              About me
            </Heading>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '40px auto 0'
              }}
            >
              <Avatar
                src={MePicture}
                href={'https://twitter.com/piecu'}
                height={200}
                width={200}
              />
              <Text textSize="4em" textColor="primary" bold margin="0px 5px">
                +
              </Text>
              <Avatar
                src={ScalacLogoPicture}
                href={'https://twitter.com/scalac_io'}
                height={200}
                width={200}
              />
              <Text textSize="3em" textColor="primary" bold margin="0px 5px">
                +
              </Text>
              {[
                'computer',
                'sleuth_or_spy',
                'nerd_face',
                'man-running',
                'man-biking'
              ].map(emojiId => <MyMyEmoji64 key={emojiId} id={emojiId} />)}
            </div>
            <Portal>
              <WeAreHiring />
            </Portal>
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={3} textColor="primary">
              TypeScript?
            </Heading>
            <div style={{textAlign: 'left'}}>
              <Heading size={5} textColor="secondary">
                Basic Types
              </Heading>
              <Heading size={5} textColor="secondary">
                Functions, Interfaces
              </Heading>
              <Heading size={5} textColor="secondary">
                Classes
              </Heading>
              <Heading size={5} textColor="secondary">
                Generics
              </Heading>
              <Heading size={5} textColor="secondary">
                Declaration Files
              </Heading>
              <Heading size={5} textColor="secondary">
                JavaScript with TypeScript
              </Heading>
              <Heading size={5} textColor="primary">
                Living on the edge? <MyMyEmoji48 id={'sleuth_or_spy'} />
              </Heading>
            </div>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="secondary" caps>
              TypeScript — JavaScript with superpowers
            </Heading>
            <Text textColor="tertiary">
              Giving Type Check to JavaScript <br /> ( from 2012 )
            </Text>
            <div style={{margin: '30px 0px 0px 30px', textAlign: 'left'}}>
              <Text textColor="#333" textSize={'1em'} margin="15px 0">
                > March 2018 - 8,584,855 downloads of <br /> typescript package!{' '}
                <MyMyEmoji32 id={'open_mouth'} />
              </Text>
              <Text textColor="#333" textSize={'1em'} margin="15px 0">
                > GitHub’s own 2017 State of the Octoverse puts TypeScript as
                the 11th
              </Text>
              <Text textColor="#333" textSize={'1em'} margin="15px 0">
                > Not Just Angular(n)
              </Text>
              <Text textColor="#333" textSize={'1em'} margin="15px 0">
                > Open Source! <MyMyEmoji32 id={'clap'} />, DefinitelyTyped,
                Tool's Integration
              </Text>
            </div>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>
                Type correctness does not guarantee program correctness.
              </Quote>
              <Cite>Eric Elliott</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="primary" caps>
              Example Code 03 - Simple types
            </Heading>
            <ComponentPlayground
              theme="dark"
              code={require('raw-loader!./example/example03.etsx')}
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary" caps>
              Example Code 01
            </Heading>
            <ComponentPlayground
              theme="dark"
              code={require('raw-loader!./example/example01.etsx')}
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary" caps>
              Example Code 02
            </Heading>
            <ComponentPlayground
              theme="dark"
              code={require('raw-loader!./example/example02.etsx')}
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
            />
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
            <Heading textColor="secondary" fit>
              End.
            </Heading>
          </Slide>
        </Deck>
        <Scalac />
      </React.Fragment>
    );
  }
}