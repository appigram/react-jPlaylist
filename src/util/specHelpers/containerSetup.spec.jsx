import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayerReducer } from '@appigram/react-jplayer';

import jPlaylistReducer from '../../reducer/reducer';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

export default (Container, jPlaylists, jPlayers, props) => {
  const state = {
    jPlayers,
    jPlaylists,
  };

  const store = createStore(combineReducers({
    jPlayers: jPlayerReducer,
    jPlaylists: jPlaylistReducer,
  }), state);

  const wrapper = mount(
    <Provider store={store}>
      <Container {...props} />
    </Provider>, {
      context: {
        id: 'TestPlayer',
        index: 0,
      },
      childContextTypes: {
        id: PropTypes.string,
        index: PropTypes.number,
      },
    },
  );

  return {
    wrapper,
    props,
    store,
  };
};
