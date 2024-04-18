import { render } from '@testing-library/react';
import React from 'react';
import Exception, { EExceptionCode } from '../src';

describe('Basic', () => {
  it('className props should work on component', () => {
    const className = 'hankliu-exception';
    const { container } = render(
      <Exception className={className} code={EExceptionCode.NotFound} />,
    );
    // @ts-ignore
    expect(container.firstChild).toHaveClass(className);
  });

  it('prefixCls props should work on component', () => {
    const prefixCls = 'hankliu-exception';
    const { container } = render(
      <Exception prefixCls={prefixCls} code={EExceptionCode.NotFound} />,
    );
    // @ts-ignore
    expect(container.firstChild).toHaveClass(prefixCls);
  });

  it('code props should work on component', () => {
    const code = EExceptionCode.ServiceUnavailable;
    const { container } = render(<Exception code={code} />);

    const codeDom = container.querySelector('.hlui-exception-content-code');
    const descDom = container.querySelector('.hlui-exception-content-desc');
    expect(codeDom.textContent).toEqual(`${code}`);
    expect(descDom.textContent).toEqual('Service Unavailable');
  });

  it('description props should work on component', () => {
    const description = '对不起，您访问的页面不存在。';
    const { container } = render(
      <Exception code={EExceptionCode.NotFound} description={description} />,
    );

    const codeDom = container.querySelector('.hlui-exception-content-code');
    const descDom = container.querySelector('.hlui-exception-content-desc');
    expect(codeDom.textContent).toEqual(`${EExceptionCode.NotFound}`);
    expect(descDom.textContent).toEqual(description);
  });
});
