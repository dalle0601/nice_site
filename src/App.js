import React from 'react';
import Header from './Header/header';
import Navigation from './Navigation/navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation first="NEW RELEASES" second="MEN" third="WOMEN" four="KIDS" />
    </div>
  );
}

export default App;
