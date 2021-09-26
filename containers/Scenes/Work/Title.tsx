import {
  Heading,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Scene } from 'react-scrollmagic';
import {
  Tween, Timeline,
} from 'react-gsap';

import {
  HeadingText,
  HeadingHeight,
  EmphasisText,
} from '../../../constants/constants';

export const Title = ({ windowHeight }: SceneProps) : JSX.Element => (
  <Scene
    duration={windowHeight / 2}
    pin
    offset={155}
  >
    {(progress: number | undefined) => (
      <Box alignItems="center">
        <Timeline totalProgress={progress} paused>
          <Timeline
            target={(
              <>
                <Flex flexDirection="row" overflow="hidden" height={HeadingHeight}>
                  <Text
                    fontSize={HeadingText}
                    color={EmphasisText}
                  >
                    ~/.hist
                  </Text>
                </Flex>
                <Heading pl="50px" size="xl">[[ life && work ]] ; then</Heading>
              </>
                )}
          >
            <Tween
              target={0}
              from={{
                overflow: 'hidden',
                opacity: 0,
                width: 0,
              }}
              to={{
                overflow: 'hidden',
                opacity: 1,
                width: '100%',
              }}
              duration={0.1}
            />
            <Tween
              target={1}
              from={{
                overflow: 'hidden',
                opacity: 0,
              }}
              to={{
                overflow: 'hidden',
                opacity: 1,
              }}
            />
          </Timeline>
        </Timeline>
      </Box>
    )}
  </Scene>
);
