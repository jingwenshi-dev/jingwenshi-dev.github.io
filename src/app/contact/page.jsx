'use client'

import { Empty } from '@douyinfe/semi-ui';
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations';

const Projects = () => {
  return (

    <Empty
      image={<IllustrationConstruction style={{ width: 150, height: 150 }} />}
      darkModeImage={<IllustrationConstructionDark style={{ width: 150, height: 150 }} />}
      title={'Work in progress'}
      description="The current web page is not available yet, so stay tuned."
    />

  );
};

export default Projects;
