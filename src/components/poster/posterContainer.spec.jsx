/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockPoster = () => <img />;
const posterContainer = proxyquire('./posterContainer', {
  '@appigram/react-jplayer': { PosterComponent: mockPoster },
}).default;
const setup = (jPlayers, props) => containerSetup(posterContainer, jPlayers, props);

describe('PosterContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        playlist: [{
          poster: 'test.jpg',
        }],
      },
    };
  });

  it('passes in src', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find(mockPoster).prop('src')).toBe('test.jpg');
  });
});
