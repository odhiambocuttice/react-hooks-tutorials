/* eslint-disable */
// import ControlledInputs from "./components/Form/ControlledInputs";
import UncontrolledInputs from "./components/Form/UseRef/UncontrolledInputs";
import ShowHide from "./components/short-Circuit/ShowHide";
import ConditionalReturn from "./components/useEffect/ConditionalReturn";
import UseEffectBasics from "./components/useEffect/UseEffectBasics";
import UseEffectFetchData from "./components/useEffect/UseEffectFetchData";
import ErrorExample from "./components/useState/ErrorExample";
import "./index.css";
import Index from "./components/PropTypes";
import UseContext from "./components/ContextApi/UseContext";
import Data from "./components/Customhooks/Data";
import reactRouterDom from "react-router-dom";
import ReactRouteSetup from "./components/ReactRouter/ReactRouteSetup";
function App() {
  return (
    <div className="container">
      {/* <ErrorExample />
      <UseEffectBasics />
      <UseEffectFetchData />
      <ConditionalReturn />
      <ShowHide />
      <ControlledInputs />
      <UncontrolledInputs />
      <Index />
      <UseContext />
      <Data />
      <Index />
      <ReactRouteSetup /> */}
      <ReactRouteSetup />
    </div>
  );
}

export default App;
