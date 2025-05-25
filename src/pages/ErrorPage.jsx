import NavigationBar from "../components/NavigationBar";
import Container from "../components/Container";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router";
export default function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main className="flex h-svh w-full relative">
      <NavigationBar />
      <div className=" p-5 md:p-10 min-sm:ml-auto max-sm:pb-30 max-sm:w-[100%] min-sm:w-[60%] md:w-[70%] lg:w-[75%] h-fit">
        <Container additionalClasses={" min-sm:w-[25rem]"}>
          <Header size="small" additionalClass="text-red-600 text-center">
            Oops! The page you're looking for doesn't exist.
          </Header>
          <Button
            additionalClass={"ml-auto mt-4"}
            size="wide"
            type="info"
            handleClick={handleClick}
          >
            Go Back
          </Button>
        </Container>
      </div>
    </main>
  );
}
