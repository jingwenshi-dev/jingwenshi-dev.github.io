'use client'
import { Button } from '@douyinfe/semi-ui';

const testButton = () => {
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      window.setMode('light');
    } else {
      body.setAttribute('theme-mode', 'dark');
      window.setMode('dark');
    }
  };

  return (
    <Button onClick={switchMode}>
      Switch Mode
    </Button>
  );
}

export default testButton;