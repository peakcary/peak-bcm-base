import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Select, Card } from 'antd';
import './index.css';
const { Option } = Select;
type TProps = {
  ptype: string;
  initialValue: string;
  readonly: boolean;
  onCancel: () => void;
  onConfirm: (params: string) => void;
};

export const BcmProps: React.FC<TProps> = props => {
  const { ptype, initialValue, readonly, onConfirm, onCancel } = props;
  const [data, setData] = useState([]);
  const [dataC, setDataC] = useState([]);
  let selectedValue: string = initialValue;

  useEffect(() => {
    const fetchData = async () => {
      let url = '/api/property/user/properties';
      if (ptype === 'event') {
        url = `/api/v2/sf/events/all?project=default&cache=false&invisible=false&check_permission=false`;
      }
      if (ptype === 'product') {
        url = `/api/v2/sf/items/type?project=default&cache=false&invisible=false&check_permission=false`;
      }
      axios
        .get(url, {
          params: {},
          headers: { token: '$6666ebc5599b852f3a8f81c1fdcd3575' },
        })
        .then(d => {
          setData(d.data);
        });
    };

    fetchData();
  }, []);

  const onHandleCancel = () => {
    onCancel();
  };

  const onHandleConfirm = () => {
    console.log(selectedValue);
    onConfirm(selectedValue);
  };

  const onChange = (value: string) => {
    const { ptype } = props;
    if (ptype === 'user') {
      selectedValue = '${user.' + value + '}';
    }
    if (ptype === 'event') {
      let url = '/api/event/properties?events=' + value;
      axios
        .get(url, {
          params: {},
          headers: { token: '$6666ebc5599b852f3a8f81c1fdcd3575' },
        })
        .then(d => {
          console.log('ddd:', d.data[value].event);
          setDataC(d.data[value].event);
        });
    }
    if (ptype === 'product') {
      let url =
        '/api/v2/sf/items/properties?project=default&item_type=' + value;
      axios
        .get(url, {
          params: {},
          headers: { token: '$6666ebc5599b852f3a8f81c1fdcd3575' },
        })
        .then(d => {
          console.log(d.data);
          setDataC(d.data);
        });
    }
  };

  const onChangeC = (value: string) => {
    const { ptype } = props;
    if (ptype === 'event') {
      selectedValue = '${event.' + value + '}';
    }
    if (ptype === 'product') {
      selectedValue = '${item.' + value + '}';
    }
  };

  let title: string = '';
  let label: string = '';
  let labelC: string = '';
  let v: string = '';
  if (ptype === 'user') {
    title = '用户属性';
    label = '用户属性:';
    v = initialValue.split('${user.')[1];
    v = v.substring(0, v.length - 1);
  }
  if (ptype === 'event') {
    title = '事件属性';
    label = '事件类型';
    labelC = '事件属性';
  }
  if (ptype === 'product') {
    title = '产品属性';
    label = '产品类型';
    labelC = '产品属性';
  }

  return (
    <>
      <Card bordered={false} extra={<a href="#">Close</a>} title={title}>
        <div className="select_container">
          <div className="select_row">
            <div className="select_label">{label}</div>
            <div className="select_value">
              <Select
                disabled={readonly}
                defaultValue={v}
                showSearch
                style={{ width: 200 }}
                placeholder="请选择"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input: any, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {data.map((item: any) => {
                  return (
                    <Option value={item.name} key={item.name}>
                      {item.cname}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>
          {(ptype === 'event' || ptype === 'product') && (
            <div className="select_row">
              <div className="select_label">{labelC}</div>
              <div className="select_value">
                <Select
                  disabled={readonly}
                  showSearch
                  style={{ width: 200 }}
                  placeholder="请选择"
                  optionFilterProp="children"
                  onChange={onChangeC}
                  filterOption={(input: any, option: any) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {dataC.map((item: any) => {
                    return (
                      <Option value={item.naem} key={item.name}>
                        {item.cname}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </div>
          )}
        </div>
        <div className="select_line"></div>
        <div className="select_btn">
          <Button style={{ borderColor: '#fff' }} onClick={onHandleCancel}>
            取消
          </Button>
          <Button
            type="primary"
            className="btn"
            style={{ backgroundColor: '#00BF8A', borderColor: '#00BF8A' }}
            onClick={onHandleConfirm}
          >
            插入
          </Button>
        </div>
      </Card>
    </>
  );
};

BcmProps.defaultProps = {
  ptype: 'user',
};

export default BcmProps;
