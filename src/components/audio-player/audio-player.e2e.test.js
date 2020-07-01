import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
  }
};

it(`Click by Play button calls callback`, () => {

  const onPlayButtonClick = jest.fn();
  const player = mount(<AudioPlayer
    src={mock.song.src}
    isPlaying={false}
    onPlayButtonClick={onPlayButtonClick}>
  </AudioPlayer>
  );
  player.setState({isLoading: false});
  player.find(`.track__button`).simulate(`click`, {preventDefault() {}});
  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});
