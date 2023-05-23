import './Popup.css';

const  Popup = ({isPopup}) => {
    return (
      <>
      {isPopup && <div className='container'>
      <div className='header'>
      <div className='headerTitle'>Add Task</div>
      </div>
      </div>}
      </>
    );
    
  }

  export default Popup;