import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwend test
      </h1>
      <Card username="Chai aur code" btnText="Click me" />
      <Card username="Pramod Upadhyay" btnText="Visit me" />
    </>
  );
}

export default App;
