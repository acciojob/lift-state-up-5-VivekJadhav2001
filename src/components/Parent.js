import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Callback to update state from Child
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
    </div>
  );
}

export default Parent;
