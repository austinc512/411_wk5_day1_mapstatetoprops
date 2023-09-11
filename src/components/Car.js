import React from "react";
import { Container, Paper, Chip } from "@mui/material";
import { useParams } from "react-router-dom";
// import cars from "../cars.json"; // remove this

const Car = (props) => {
  const cars = props.cars;
  //   const id = props.match.params.id;
  const id = useParams().id;
  const car = props.cars.find((c) => c.id == id);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{car.Name}</h2>
        {Object.keys(car).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Car;

/*
Cannot read properties of undefined (reading 'params')
TypeError: Cannot read properties of undefined (reading 'params')
    at Car (http://localhost:3000/static/js/bundle.js:390:26)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:41371:22)
    at mountIndeterminateComponent (http://localhost:3000/static/js/bundle.js:44657:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:45953:20)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:30963:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:31007:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:31064:35)
    at beginWork$1 (http://localhost:3000/static/js/bundle.js:50938:11)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:50185:16)
    at workLoopSync (http://localhost:3000/static/js/bundle.js:50108:9)
*/
