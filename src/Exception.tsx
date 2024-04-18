import classNames from 'classnames';
import React, { useMemo } from 'react';
import styled from 'styled-components';

export interface IProductLink {
  name: string;
  link: string;
}

export enum EExceptionCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

// const ExceptionDescription = {
//   [EExceptionCode.Unauthorized]: '对不起，您访问的页面未授权。',
//   [EExceptionCode.Forbidden]: '对不起，您未被授权访问此页面。',
//   [EExceptionCode.NotFound]: '对不起，您访问的页面不存在。',
//   [EExceptionCode.InternalServerError]: '对不起，服务器出了点问题。',
//   [EExceptionCode.BadGateway]: '对不起，服务器网关出了点问题。',
//   [EExceptionCode.ServiceUnavailable]: '对不起，服务器正在维护当中，请稍后再使用。',
//   [EExceptionCode.GatewayTimeout]: '对不起，服务器网关超时了。',
// }

const ExceptionDescriptionEn = {
  [EExceptionCode.Unauthorized]: 'Unauthorized',
  [EExceptionCode.Forbidden]: 'Forbidden',
  [EExceptionCode.NotFound]: 'Not Found',
  [EExceptionCode.InternalServerError]: 'Internal <br /> Server Error',
  [EExceptionCode.BadGateway]: 'Bad Gateway',
  [EExceptionCode.ServiceUnavailable]: 'Service Unavailable',
  [EExceptionCode.GatewayTimeout]: 'Gateway Timeout',
};

export interface IExceptionProps {
  className?: string;
  prefixCls?: string;
  code: EExceptionCode;
  description?: string;
}

/**
 * 错误页面
 * @param param0
 * @returns
 */
export default function Exception({
  className,
  prefixCls = 'hlui-exception',
  code,
  description = ExceptionDescriptionEn[code],
}: IExceptionProps) {
  const containerHeight = useMemo(() => {
    switch (code) {
      case EExceptionCode.Unauthorized:
        return '330px';
      case EExceptionCode.Forbidden:
        return '380px';
      case EExceptionCode.NotFound:
        return '450px';
      case EExceptionCode.InternalServerError:
        return '390px';
      case EExceptionCode.BadGateway:
        return '420px';
      case EExceptionCode.ServiceUnavailable:
        return '400px';
      case EExceptionCode.GatewayTimeout:
        return '425px';
      default:
        return '450px';
    }
  }, [code]);

  const Container = styled.div`
    display: block;
    height: ${containerHeight};
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  `;

  const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    user-select: none;
  `;

  const codeFontSize = useMemo(() => {
    switch (code) {
      case EExceptionCode.Unauthorized:
        return '220px';
      case EExceptionCode.Forbidden:
        return '250px';
      case EExceptionCode.NotFound:
        return '300px';
      case EExceptionCode.InternalServerError:
        return '260px';
      case EExceptionCode.BadGateway:
        return '280px';
      case EExceptionCode.ServiceUnavailable:
        return '255px';
      case EExceptionCode.GatewayTimeout:
        return '280px';
      default:
        return '300px';
    }
  }, [code]);

  const codeLineHeight = useMemo(() => {
    switch (code) {
      case EExceptionCode.Unauthorized:
        return 0.8;
      case EExceptionCode.Forbidden:
        return 0.8;
      case EExceptionCode.NotFound:
        return 0.78;
      case EExceptionCode.InternalServerError:
        return 0.76;
      case EExceptionCode.BadGateway:
        return 0.78;
      case EExceptionCode.ServiceUnavailable:
        return 0.8;
      case EExceptionCode.GatewayTimeout:
        return 0.78;
      default:
        return 0.78;
    }
  }, [code]);

  const codeBoxReflectLength = useMemo(() => {
    switch (code) {
      case EExceptionCode.Unauthorized:
        return '-22px';
      case EExceptionCode.Forbidden:
        return '-25px';
      case EExceptionCode.NotFound:
        return '-26px';
      case EExceptionCode.InternalServerError:
        return '-12px';
      case EExceptionCode.BadGateway:
        return '-16px';
      case EExceptionCode.ServiceUnavailable:
        return '-22px';
      case EExceptionCode.GatewayTimeout:
        return '-22px';
      default:
        return '-26px';
    }
  }, [code]);

  const Code = styled.div`
    font-family: 'panpanzhurouti';
    font-size: ${codeFontSize};
    line-height: ${codeLineHeight};
    color: #000;
    font-weight: 1000;
    align-self: end;
    -webkit-box-reflect: ${`below ${codeBoxReflectLength} -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(0.1, transparent), to(rgba(0, 0, 0, .4)))`};
  `;

  const descriptionFontSize = useMemo(() => {
    switch (code) {
      case EExceptionCode.Unauthorized:
        return '80px';
      case EExceptionCode.Forbidden:
        return '100px';
      case EExceptionCode.NotFound:
        return '120px';
      case EExceptionCode.InternalServerError:
        return '80px';
      case EExceptionCode.BadGateway:
        return '105px';
      case EExceptionCode.ServiceUnavailable:
        return '85px';
      case EExceptionCode.GatewayTimeout:
        return '100px';
      default:
        return '120px';
    }
  }, [code]);

  const descriptionBoxReflectLength = useMemo(() => {
    switch (code) {
      case EExceptionCode.Unauthorized:
        return '-20px';
      case EExceptionCode.Forbidden:
        return '-26px';
      case EExceptionCode.NotFound:
        return '-30px';
      case EExceptionCode.InternalServerError:
        return '-20px';
      case EExceptionCode.BadGateway:
        return '-10px';
      case EExceptionCode.ServiceUnavailable:
        return '-22px';
      case EExceptionCode.GatewayTimeout:
        return '-25px';
      default:
        return '-30px';
    }
  }, [code]);

  const Description = styled.div`
    margin-left: 20px;
    color: #000;
    line-height: 1;
    align-self: end;
    font-size: ${descriptionFontSize};
    -webkit-box-reflect: ${`below ${descriptionBoxReflectLength} -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(0.1, transparent), to(rgba(0, 0, 0, .4)))`};
  `;

  return (
    <Container
      className={classNames(prefixCls, {
        [className]: className,
      })}
    >
      <Content className={`${prefixCls}-content`}>
        <Code className={`${prefixCls}-content-code`}>{code}</Code>
        <Description className={`${prefixCls}-content-desc`}>
          {EExceptionCode.InternalServerError ? (
            <span
              dangerouslySetInnerHTML={{ __html: description || ExceptionDescriptionEn[code] }}
            />
          ) : (
            description || ExceptionDescriptionEn[code]
          )}
        </Description>
      </Content>
    </Container>
  );
}
