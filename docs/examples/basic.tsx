import { Col, ConfigProvider, Divider, Input, Row, Select } from '@hankliu/hankliu-ui';
import zhCN from '@hankliu/hankliu-ui/lib/locale/zh_CN';
import Exception, { EExceptionCode } from '@hankliu/rc-exception';
import * as React from 'react';
import '../../assets/index.less';

const codeOptions = [
  EExceptionCode.Unauthorized,
  EExceptionCode.Forbidden,
  EExceptionCode.NotFound,
  EExceptionCode.InternalServerError,
  EExceptionCode.BadGateway,
  EExceptionCode.ServiceUnavailable,
  EExceptionCode.GatewayTimeout,
];

export default function Base() {
  const [code, setCode] = React.useState<EExceptionCode>(EExceptionCode.Unauthorized);
  const [description, setDescription] = React.useState<string>();

  return (
    <ConfigProvider locale={zhCN}>
      <Exception code={code} description={description} />

      <Divider />

      <Row gutter={16}>
        <Col span={8}>
          <Row align="middle">
            <Col flex="80px">错误码:</Col>
            <Col flex="1">
              <Select
                value={code}
                style={{ width: '100%' }}
                onChange={val => {
                  setDescription(undefined);
                  setCode(val);
                }}
                showSearch
              >
                {codeOptions.map(item => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row align="middle">
            <Col flex="80px">错误消息:</Col>
            <Col flex="1">
              <Input
                placeholder="请输入错误消息"
                style={{ width: '100' }}
                value={description}
                onChange={event => {
                  setDescription(event.target.value);
                }}
                allowClear
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </ConfigProvider>
  );
}
