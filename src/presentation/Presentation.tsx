import React from 'react';
import {transform} from '@babel/standalone';
import {Emoji} from 'emoji-mart';
import {Portal} from 'react-portal';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image
} from 'spectacle';

import ComponentPlayground from 'presentation/ui/ComponentPlayground';
import WeAreHiring from 'presentation/ui/Scalac/WeAreHiring';
import Scalac from 'presentation/ui/Scalac/Scalac';
import Avatar from 'presentation/ui/Avatar';
import ExternalLink from 'presentation/ui/ExternalLink';
import LiveLogger from 'presentation/ui/LiveLogger';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Require CSS
require('normalize.css');

// assets
import MePicture from 'public_static/assets/me.jpg';
import NotCare from 'public_static/assets/NotCare.gif';
import ScalacLogoPicture from './ui/Scalac/ScalacLogo.png';
import Superman from 'public_static/assets/Superman.gif';

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
            <Heading size={2} fit caps lineHeight={1} textColor="primary">
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
                'baby'
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
                Functions, Classes, Interfaces, Generics...
              </Heading>
              <Heading size={5} textColor="primary">
                JavaScript with TypeScript
              </Heading>
              <Heading size={6} textColor="secondary">
                Webpack | Declaration Files
              </Heading>
              <Heading size={5} textColor="primary">
                Living on the edge? <MyMyEmoji48 id={'sleuth_or_spy'} />
              </Heading>
            </div>
          </Slide>

          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="secondary">
              Why TypeScript? — JS with superpowers
            </Heading>
            <Text textColor="tertiary">
              Syntactic superset of JavaScript that compiles to JS (EcmaScript
              3+)
            </Text>
            <div style={{margin: '30px 0px 0px 30px', textAlign: 'left'}}>
              <Text textColor="#333" textSize={'1em'} margin="20px 0">
                No surprise here <b>TYPES</b>{' '}
                <MyMyEmoji32 id={'raised_hands'} />
              </Text>
              <Text textColor="#333" textSize={'1em'} margin="20px 0">
                <b>Open Source!</b> <MyMyEmoji32 id={'clap'} />,
                DefinitelyTyped, Tool's Integration
              </Text>
              <Text textColor="#333" textSize={'1em'} margin="20px 0">
                March 2018 - <b>8,584,855</b> downloads of <br /> typescript
                package! <MyMyEmoji32 id={'open_mouth'} />
              </Text>
              <Text textColor="#333" textSize={'1em'} margin="20px 0">
                GitHub’s own 2017 State of the Octoverse puts{' '}
                <b>TypeScript the 11th</b> most popular language!
              </Text>
            </div>
          </Slide>

           <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="secondary">
              Where JS is not so good...
            </Heading>
            <div style={{textAlign: 'left', marginTop: 40}}>
              <Heading size={6} textColor="tertiary">
                Refactoring
              </Heading>
              <Heading size={6} textColor="tertiary">
                Large codebase
              </Heading>
              <Heading size={6} textColor="tertiary">
                Big team
              </Heading>
              <Heading size={6} textColor="tertiary">
                Type checks in JS can take time
              </Heading>
            </div>
          </Slide>

          <Slide
            transition={['fade']}
            bgColor="quarternary"
            textColor="tertiary"
          >
            <Image src={NotCare} margin="0px auto 40px" />
            <Heading size={4} textColor="secondary">
              I know you care... <MyMyEmoji64 id={'hugging_face'} />
            </Heading>
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
            <Heading size={6} textColor="primary">
              TypeScript in 5 minutes <MyMyEmoji48 id={'rocket'} />
            </Heading>
            <ComponentPlayground
              theme="dark"
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
              code={require('raw-loader!./example/example00.etsx')}
              scope={{LiveLogger}}
              preview={false}
            />
          </Slide>

          <Slide
            transition={['fade']}
            bgColor="quarternary"
            textColor="tertiary"
          >
            <Heading size={4} textColor="secondary">
              Bede grał w te gre! <MyMyEmoji64 id={'video_game'} />
            </Heading>
            <Image src={Superman} margin="0px auto 40px" />
          </Slide>


          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="tertiary">
              tsconfig.json
            </Heading>
            <Text margin="40px 0">
              The tsconfig.json file in a directory indicates that the directory
              is the root of a TypeScript project.
            </Text>
          </Slide>

          <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="primary">
              tsconfig | Compiler options <MyMyEmoji48 id={'thinking_face'} />
            </Heading>
            <ComponentPlayground
              theme="dark"
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
              code={JSON.stringify(require('tsconfig.json'), null, 2)}
              preview={false}
              disablePreview={true}
              noSyntaxValidation={true}
              noSemanticValidation={true}
            />
          </Slide>

          <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="primary">
              Simple types
            </Heading>
            <ComponentPlayground
              theme="dark"
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
              code={require('raw-loader!./example/example01.etsx')}
              preview={false}
            />
          </Slide>

          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="tertiary">
              Functions, Interfaces, Optional Properties, Classes, Generics...
              <MyMyEmoji48 id={'scream'} />
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="primary">
              Example Code 01
            </Heading>
            <ComponentPlayground
              theme="dark"
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
              code={require('raw-loader!./example/example02.etsx')}
              noImplicitAny={true}
            />
          </Slide>

          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="secondary">
              In Real Life...
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary" caps>
              Example Code 02
            </Heading>
            <ComponentPlayground
              theme="dark"
              code={require('raw-loader!./example/example03.etsx')}
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
              noImplicitAny={true}
            />
          </Slide>

          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={4} textColor="secondary">
              TS and JS together <MyMyEmoji64 id={'heart_eyes'} />
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="secondary">
              Webpack | Declaration Files
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="quarternary">
              webpack.config.js
            </Heading>
            <ComponentPlayground
              theme="dark"
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
              code={require('!!raw-loader!webpack.config.js')}
              preview={false}
              disablePreview={true}
              noSyntaxValidation={true}
              noSemanticValidation={true}
            />
          </Slide>

          <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="quarternary">
              *.d.ts | declarations.d.ts
            </Heading>
            <ComponentPlayground
              theme="dark"
              previewBackgroundColor="#ff0"
              transformCode={transformCode}
              code={require('!!raw-loader!./../declarations.d.ts')}
              preview={false}
              disablePreview={true}
              noSyntaxValidation={true}
              noSemanticValidation={true}
            />
          </Slide>

          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={4} textColor="secondary">
              TypeScript Roadmap
            </Heading>
            <div style={{textAlign: 'left', marginTop: 40}}>
              <Heading size={6} textColor="tertiary">
                2.9 (May 2018)
              </Heading>
              <Heading size={6} textColor="tertiary">
                2.8 (March 2018)
              </Heading>
              <Heading size={6} textColor="tertiary">
                2.7 (January 2018)
              </Heading>
            </div>
          </Slide>

          <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
            <Heading textColor="secondary" fit>
              End. Questions?
            </Heading>
          </Slide>
        </Deck>
        <Scalac />
      </React.Fragment>
    );
  }
}
