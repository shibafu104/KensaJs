---
title: 基本的な使い方
---

## 使用方法

下記は最もシンプルな使い方です。

```typescript
import Kensa from 'kensajs';
import { testFunction } from './testFunction';

const ks = Kensa('テストタイトル');

ks.test({
  title: 'テスト項目',
  input: testFunction(1, 1),
  expect: 2,
});

ks.run();
```

1. Kensaをインポートします。`import Kensa from 'kensajs';`
1. `test()`を使用して、テストを追加します。詳しくは [test](/reference/test) を参照してください。
1. `run()`でテストを実行します。

###### 実行結果
```bash
📄 テストタイトル
  ✓  テスト項目

TOTAL: 1, PASS: 1, FAIL: 0
```


## 自動化

.ks.js または .ks.ts ファイルを作成することで、テストを自動化することができます。
下記は自動化の例です。

1. package.jsonにスクリプトを追加します。

```json
"test": "kensa"
```

2. .ks.js または .ks.ts ファイルを作成します。もし .ks.ts ファイルを実行する場合は、`ts-node` をインストールしてください。


```sh
npm install ts-node --save-dev
```

作成方法は下記の通りです。
```typescript
import Kensa from 'kensajs';

let ks = Kensa('テストタイトル');

ks.test({
  title: 'テスト項目',
  input: testFunction(2, 4),
  expect: 6,
});

const runner = ks.getRunner();
export { runner };
```

1. Kensaをインポートします。`import Kensa from 'kensajs';`
1. `test()`を使用して、テストを追加します。詳しくは [test](/reference/test) を参照してください。
1. `getRunner()`を使用して、runnerを取得します。
1. runnerをエクスポートします。

※ 自動化の場合は、`run()`を使用しないでください。

###### テストの実行
```sh
npm run test
```
###### 実行結果

```bash
📄 テストタイトル
  ✓  テスト項目

TOTAL: 1, PASS: 1, FAIL: 0
```