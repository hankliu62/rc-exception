# @hankliu/rc-exception

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![bundle size][bundlephobia-image]][bundlephobia-url] [![dumi][dumi-image]][dumi-url]

[npm-image]: http://img.shields.io/npm/v/rc-exception.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@hankliu/rc-exception
[travis-image]: https://img.shields.io/travis/hankliu62/rc-exception/master?style=flat-square
[github-actions-image]: https://github.com/hankliu62/rc-exception/workflows/CI/badge.svg
[github-actions-url]: https://github.com/hankliu62/rc-exception/actions
[codecov-image]: https://img.shields.io/codecov/c/github/hankliu62/rc-exception/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/hankliu62/rc-exception
[download-image]: https://img.shields.io/npm/dm/@hankliu/rc-exception.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hankliu/rc-exception
[bundlephobia-url]: https://bundlephobia.com/package/@hankliu/rc-exception
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@hankliu/rc-exception
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square

在 `HankLiu WebApp` 页面中使用的通用的 `Exception` 组件，包含常见 `401`，`403`，`404`，`500`，`502`，`503` 等常见错误码对应的内容。

## 功能特征

- [x] 401 状态码
- [x] 403 状态码
- [x] 404 状态码
- [x] 500 状态码
- [x] 502 状态码
- [x] 503 状态码

## 安装

```bash
npm install @hankliu/rc-exception --save
```

or

```bash
yarn add @hankliu/rc-exception
```

or

```bash
pnpm install @hankliu/rc-exception
```

## Usage

```bash
npm install
npm start
```

```js
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
```

## API

| 名称        | 类型           | 默认值                         | 描述                        |
| ----------- | -------------- | ------------------------------ | --------------------------- |
| className   | string         | -                              | 组件外层元素 classname      |
| prefixCls   | string         | hlui-footer                    | 组件外层元素 classname 前缀 |
| code        | EExceptionCode | -                              | 错误码                      |
| description | string         | `ExceptionDescriptionEn[code]` | 错误码对应的描述            |

## 案例

`npm start` 然后打开 http://localhost:8000/examples/

线上案例: https://hankliu62.github.io/rc-exception

## 单元测试

```
npm test
```

## 覆盖率

```
npm run coverage
```

## License

@hankliu/rc-exception is released under the MIT license.
