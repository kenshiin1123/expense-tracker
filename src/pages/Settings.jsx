import Header from "../components/Header";
import ToggleButton from "../components/ToggleButton";
import Label from "../components/Label";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../store/global";
import Container from "./../components/Container";
export default function Settings() {
  const active = useSelector((state) => state.global.darkmode);
  const dispatch = useDispatch();

  const buttonRef = useRef();
  const handleButtonClick = () => {
    dispatch(globalActions.setDarkmode(!active));
  };

  return (
    <>
      <Header additionalClass="my-5">Settings</Header>
      <Container additionalClasses={"mt-5"}>
        <Section>
          <Label onClick={handleButtonClick}>Dark Mode</Label>
          <ToggleButton
            ref={buttonRef}
            toggler={handleButtonClick}
            active={active}
          />
        </Section>
      </Container>
    </>
  );
}

const Section = ({ children }) => {
  return <section className="flex items-center gap-4">{children}</section>;
};
