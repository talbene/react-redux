

import {ACTIVATE_GEOD, CLOSE_GEOD} from '../types/types'

export const activateGeod = geod => ({
  type: ACTIVATE_GEOD,
  geod,
});

export const closeGeod = () => ({
  type: CLOSE_GEOD,
});