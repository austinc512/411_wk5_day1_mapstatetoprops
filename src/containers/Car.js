import { connect } from "react-redux";
// import the visual React component "Home"
import Car from "../components/Car";

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
// state.cars is what exists in our state.js file
// now cars available to our "dumb" component, <Home /> as props.cars

// wrap the visual React Component "Home" with the Redux Container Component Home
// note currying syntax - also called partial application
export default connect(mapStateToProps)(Car);
