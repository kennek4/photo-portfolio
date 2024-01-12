import CustomButton from "./components/CustomButton";
import SectionHeader from "./components/SectionHeader";

function App() {

  const buttonFnc = () => {
    console.log("Yo it worked!")
  };

  return (
    <>
      <SectionHeader headerSize={"small"} headerText={"Testing"} />
      <CustomButton buttonText={"Test Button Please Press"} onClickFunction={buttonFnc} />
    </>
  )
}

export default App
