# envs-json

앱을 실행하는 시점에서 각 환경에 맞는 `env` 를 설정.

## Install

```
# with npm 
npm install envs-json
 
# or with Yarn 
yarn add envs-json
```

## Usage

- `json` 파일을 미리 생성 후 `process.env` 에 적용하려 할 때

```js
require('envs-json').loadEnvs();
```

- `json` 파일을 생성하지 않고 특정 `object` 를 `process.env` 에 적용하려 할 때

```js
require('envs-json').setEnvs({
  'NODE_ENV': 'production'
});
```

## Methods

### `loadEnvs([option])`

- `option` - `object`
  - `jsonFile`
    - default: `env.json`
    - 미리 정의된 `json` 파일 네임 (경로는 앱이 실행되는 root를 기준으로 작성.)
  - `force`
    - default: `false`,
    - `true` 일 경우 미리 정의되어있는 `env` 를 덮어씌운다.
  - `log`
    - default: `false`
    - `true` 일 경우 `process.env` 에 추가된 `env` 를 콘솔에 남깁니다.
    
### `setEnvs(env, [option])`

 - `env` - `object`
   - 추가한 `env object` 를 기입합니다. 
 - `option`
  - `force`
    - default: `false`,
    - `true` 일 경우 미리 정의되어있는 `env` 를 덮어씌운다.
  - `log`
    - default: `false`
    - `true` 일 경우 `process.env` 에 추가된 `env` 를 콘솔에 남깁니다.