import { CSSProperties } from 'react';
import { FidgetSpinner } from 'react-loader-spinner';
const spinnerStyle: CSSProperties = {
    position: "fixed",
    top:  "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
function Spinner() {
  return (
    <div style={spinnerStyle}>
        <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
        />
    </div>
    
  )
}

export default Spinner;