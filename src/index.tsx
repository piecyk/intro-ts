import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { AppContainer } from "react-hot-loader";
// import Redbox from "redbox-react";

import Presentation from 'presentation/Presentation';

const AppContainer = ({children}: {children: JSX.Element}) => children;

// const CustomErrorReporter = ({error}: any) => {
//   console.log(error);
//   return null;
// };

// CustomErrorReporter.propTypes = {
//  error: PropTypes.instanceOf(Error).isRequired
// };

ReactDOM.render(
  <AppContainer>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept("./presentation", () => {
//     const NextPresentation = require("./presentation").default;
//     ReactDOM.render(
//       <AppContainer errorReporter={CustomErrorReporter}>
//         <NextPresentation />
//       </AppContainer>,
//       document.getElementById("root"),
//     );
//   });
// }
