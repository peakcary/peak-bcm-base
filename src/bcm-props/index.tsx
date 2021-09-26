import React from 'react';
import './index.less';

type TProps = {
  ptype?: string;
  initialValue?: string;
  readonly?: boolean;
  onConfirm?: (params: string) => void;
};

export const BcmProps: React.FC<TProps> = props => {
  const { ptype, initialValue, readonly, onConfirm } = props;

  return (
    <div className="c">
      hello,{ptype},{initialValue},{readonly}
    </div>
  );
};

export default BcmProps;
