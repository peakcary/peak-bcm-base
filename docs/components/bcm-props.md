---
title: BcmProps 属性插入
---

# BcmProps 属性插入

Demo:

```tsx
import React from 'react';
import { BcmProps } from 'peak-bcm-base';

export default () => (
  <div>
    <BcmProps
      ptype="user"
      initialValue="${user.$mp_wx6228eb2adfba3ab4_qr_scene_str}"
      readonly={false}
      onCancel={() => {}}
      onConfirm={() => {}}
    />
    <BcmProps
      ptype="event"
      initialValue="${user.$mp_wx6228eb2adfba3ab4_qr_scene_str}"
      readonly={false}
      onCancel={() => {}}
      onConfirm={() => {}}
    />
    <BcmProps
      ptype="product"
      initialValue="${user.$mp_wx6228eb2adfba3ab4_qr_scene_str}"
      readonly={false}
      onCancel={() => {}}
      onConfirm={() => {}}
    />
  </div>
);
```

<br/>

| 属性         | 说明     | 类型       | 默认值 | 是否必传 | 版本 |
| ------------ | -------- | ---------- | ------ | -------- | ---- |
| onConfirm    | 插入按钮 | () => void |        | 否       |      |
| onCance      | 取消按钮 | () => void |        | 否       |      |
| ptype        | 类型     | string     | user   | 是       |      |
| initialValue | 初始值   | string     | ""     | 否       |      |
| readonly     | 是否只读 | boolean    | false  | 否       |      |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
