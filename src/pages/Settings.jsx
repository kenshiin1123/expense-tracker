import Header from "../components/Header";
import ToggleButton from "../components/ToggleButton";
import Label from "../components/Label";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../store/global";
import Container from "./../components/Container";
export default function Settings() {
  const darkmode = useSelector((state) => state.global.darkmode);
  const enableToast = useSelector((state) => state.global.enableToast);
  const dispatch = useDispatch();

  const darkmodeButtonRef = useRef();
  const enableToastButtonRef = useRef();

  const handleDarkModeButtonClick = () => {
    dispatch(globalActions.setDarkmode(!darkmode));
  };

  const handleToasterButtonClick = () => {
    dispatch(globalActions.setToast(!enableToast));
  };

  return (
    <>
      <Header additionalClass="my-5">Settings</Header>
      <Container additionalClasses={"mt-5 space-y-5"}>
        <Section>
          <Label onClick={handleDarkModeButtonClick}>Dark Mode</Label>
          <ToggleButton
            ref={darkmodeButtonRef}
            toggler={handleDarkModeButtonClick}
            active={darkmode}
          />
        </Section>
        <Section>
          <Label onClick={handleToasterButtonClick}>Toaster</Label>
          <ToggleButton
            ref={enableToastButtonRef}
            toggler={handleToasterButtonClick}
            active={enableToast}
          />
        </Section>
      </Container>
    </>
  );
}

const Section = ({ children }) => {
  return <section className="grid grid-cols-2 gap-4 w-60">{children}</section>;
};
