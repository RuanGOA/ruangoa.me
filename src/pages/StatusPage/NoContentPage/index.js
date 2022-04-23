import React from 'react';

import { useConfig } from '../../../contexts/config.context';

import StatusPage from '../index';

export default function NoContentPage() {
  const { getFieldData } = useConfig();

  const data = getFieldData('noContent');

  return (
    <StatusPage name='noContentPage' status='204' message={data.message} />
  );
}
