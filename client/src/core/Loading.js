import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <div className="loading">
        <ReactLoading type={type} color={color} height={40} width={40} />
    </div>
);
 
export default Loading;