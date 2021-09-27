import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Select, Card } from 'antd';
import './index.css';
const { Option } = Select;
type TProps = {
  ptype?: string;
  initialValue?: string;
  readonly?: boolean;
  onConfirm?: (params: string) => void;
};

export const BcmProps: React.FC<TProps> = props => {
  const { ptype, initialValue, readonly, onConfirm } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = '/api/property/user/properties';
      axios
        .get(url, {
          params: {},
          headers: { token: '$6666ebc5599b852f3a8f81c1fdcd3575' },
        })
        .then(d => {
          console.log('a', d);
          setData(d.data);
        });
    };

    fetchData();
  }, []);

  const onChange = (v: any) => {
    console.log(v);
  };

  return (
    <div className="container">
      hello,{ptype},{initialValue},{readonly}book aa: {data.length}
      <Select
        disabled={readonly}
        showSearch
        style={{ width: 200 }}
        placeholder="请选择"
        optionFilterProp="children"
        onChange={onChange}
      >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        {/* {data.map(item:any => {
          return <Option key={item.name}>{item.cname}</Option>
        })} */}
      </Select>
    </div>
  );
};

BcmProps.defaultProps = {
  ptype: 'user',
};

export default BcmProps;
