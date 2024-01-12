import CustomButton from "./components/CustomButton";
import SectionHeader from "./components/SectionHeader";

function App() {

  const buttonFnc = () => {
    console.log("Kyle loves me :3")
  };

  return (
    <>
      <SectionHeader headerSize={"small"} headerText={"Kyle Loves Me Not"} />
      <CustomButton buttonText={"Words of Affirmation"} onClickFunction={buttonFnc} />
    </>
  )
}

export default App
