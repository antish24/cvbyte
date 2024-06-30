import React from 'react';
import Template1 from './Template1';

const PrintableTemplate2 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ width: '210mm', height: '297mm' }}>
      <Template1 />
    </div>
  );
});

export default PrintableTemplate2;