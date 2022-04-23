import React from 'react';

import { useConfig } from '../../../contexts/config.context';

import StatusPage from '../index';

export default function NotFoundPage() {
  const { getFieldData } = useConfig();

  const data = getFieldData('notFound');

  return (
    <StatusPage name='notFoundPage' status='404' message={data.message} />
  );
}
