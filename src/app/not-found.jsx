'use client'

import { Empty } from '@douyinfe/semi-ui';
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations';

export default function NotFound() {
  const emptyStyle = {
    padding: 30,
  };

  return (
    <Empty
      image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
      darkModeImage={<IllustrationNotFoundDark style={{ width: 150, height: 150 }} />}
      description={'Page 404'}
      style={emptyStyle}
    />
  )
}
