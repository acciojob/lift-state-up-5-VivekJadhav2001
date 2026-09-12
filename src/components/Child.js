import React from 'react';

function Child({ isLoggedIn, handleLogin }) {
  const onSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    handleLogin(); // update parent state
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" /><br /><br />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" /><br /><br />
          <button type="submit" className="border-2 border-black p-1.5 bg-yellow-50">
            Login
          </button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
  );
}

export default Child;
