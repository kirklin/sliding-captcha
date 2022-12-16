# sliding-captcha

## Usage

- Local Image
- Use TypeScript
- Randomly select network pictures from [picsum.photos](https://picsum.photos)

## Usage
install sliding-captcha

```bash
npm install sliding-captcha
# or
pnpm i sliding-captcha
```

import captcha

```js
import { captcha } from "sliding-captcha";
captcha({
  el: DOM,
  width: 100,
  height: 100,
  imgSrc: "",
  onSuccess() {
    console.log("success");
  },
  onFail() {
    console.log("fail");
  },
  onRefresh() {
    console.log("refresh");
  }
});
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Kirk Lin](https://github.com/kirklin)
