import React from 'react';

import { useConfig } from '../../contexts/config.context';

import {
  StatusCard,
  StatusCode,
  StatusMessage
} from './styled';

export default function PostCard({
  status,
  message
}) {
  const { theme } = useConfig();

  return (
    <StatusCard>
      <StatusCode theme={theme}>{status}</StatusCode>
      <StatusMessage theme={theme}>{message}</StatusMessage>
    </StatusCard>
  );
}
