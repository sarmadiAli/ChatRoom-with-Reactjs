import React,{} from 'react'
import Alert from  'react-bootstrap/Alert'


function AlertDismissibleExample( props) {

      return (
        <Alert variant='danger'  >
          <Alert.Heading>
           اطلاعات وارد شده اشتباه است
          </Alert.Heading>
          <p>
           {
               props.massage
           }
          </p>
        </Alert>
      );
    

    
  }
  

  export default AlertDismissibleExample