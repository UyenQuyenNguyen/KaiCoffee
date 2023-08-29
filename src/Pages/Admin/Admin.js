import * as React from 'react';
import Dashboard from '../../Component/Admin/Dashboard';

const Admin = (props) =>{
  const { theme } = props;
    return( 
      <>
        <Dashboard theme={theme}/>
      </>
    )
}

export default Admin