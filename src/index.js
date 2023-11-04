import initScrollReveal from './scripts/scrollReveal';
import initTiltEffect from './scripts/tiltAnimation';
import { targetElements, defaultProps } from './data/scrollRevealConfig';
import './scripts/theme';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
