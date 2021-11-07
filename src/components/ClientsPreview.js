import React from 'react';

const ClientsPreview = (props) => {
  return (
    <div>
      {props.clients.map(client => (
        <h1 key={client}>{client}</h1>
      ))}
    </div>
  );
};

export default ClientsPreview;