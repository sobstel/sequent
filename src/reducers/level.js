
const initialState = 4;
const levels = [4, 8, 12, 16];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LEVEL_CHANGE':
      const currentIndex = levels.indexOf(state);

      let nextIndex = currentIndex + 1;
      if (nextIndex >= levels.length) {
        nextIndex = 0;
      }

      return levels[nextIndex];
  }

  return state;
}
