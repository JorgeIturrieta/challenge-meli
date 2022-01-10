import React, {FunctionComponent} from 'react';

type ServerErrorProps = {
  error: string;
};
const ServerError: FunctionComponent<ServerErrorProps> = ({error}) => {
  return (
    <div>
      <p style={{color: '#ec3737', textAlign: 'center'}}>{error}</p>
    </div>
  );
};

export default ServerError;
