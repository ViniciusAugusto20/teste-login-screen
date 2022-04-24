import React from 'react';
import { Toast } from '../..';

import { ToastContainerProps } from './types';

import * as S from './style';

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
  removeToast,
}) => {
  return (
    <>
      {messages.length > 0 && (
        <S.Container>
          {messages.map((message) => (
            <Toast
              key={message.key}
              message={message}
              removeToast={removeToast}
            />
          ))}
        </S.Container>
      )}
    </>
  );
};

export default ToastContainer;
