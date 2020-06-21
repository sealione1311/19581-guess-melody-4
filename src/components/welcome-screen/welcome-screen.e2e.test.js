import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Simulate button click`, () => {
  it(`Should welcome button be pressed`, () => {
    const hendleWelcomeButtonClick = jest.fn();
    const welcomeScreen = shallow(
        <WelcomeScreen
          errorsCount={3}
          onWelcomeButtonClick={hendleWelcomeButtonClick}
        />
    );
    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(hendleWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
