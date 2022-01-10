import React from 'react';

const NoMatch = () => {
  return (
    <main className="main">
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          gap: '1rem',
          height: '80vh',
        }}>
        <h2>¡La ruta solicitada no existe!</h2>
      </div>
    </main>
  );
};

export default NoMatch;
