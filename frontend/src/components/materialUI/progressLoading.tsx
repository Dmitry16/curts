import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    top: '0',
    left: '0',
    display: 'flex',
    position: 'absolute',
    width: '100%',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const getTop = () => {
  let posTop = window.innerHeight/2-50;
  return posTop;
}

const getLeft = () => {
  let posLeft = window.innerWidth/2-50;
  return posLeft;
}

const ProgressLoading = (props) => (
  <div style={(style as any).container}>
    <RefreshIndicator
      size={100}
      left={getLeft()}
      top={getTop()}
      loadingColor="#FF9800"
      status={props.status}
      style={style.refresh}
    />
  </div>
);

export default ProgressLoading;
