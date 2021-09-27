import { defineConfig } from 'dumi';

import menus from './config/menus.js';

export default defineConfig({
  title: 'peak-bcm-base',
  outputPath: 'docs-dist',
  publicPath: '/peak-bcm-base/',
  base: '/peak-bcm-base',
  history: { type: 'hash' },
  mode: 'site',
  menus,
  styles: ['https://cdn.bootcdn.net/ajax/libs/antd/4.7.0/antd.min.css'],
  // more config: https://d.umijs.org/config
});
