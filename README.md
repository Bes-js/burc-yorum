<center><img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Burc-Yorum&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=f0f0f0" /></center>


<p align="center"><img src="https://img.shields.io/npm/v/burc-yorum?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/Bes-js/burc-yorum?style=for-the-badge"> <img src="https://img.shields.io/npm/l/burc-yorum?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/burc-yorum?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/burc-yorum/axios?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/burc-yorum/cheerio?style=for-the-badge"> <a href="https://discord.gg/luppux" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a></p>

- ***`burc-yorum`*** *Paketi Size Günlük / Haftalık / Aylık Burç Yorumları Ve Burç Özelliklerini Gösterir,Hem CommonJS Hem EsModule Desteklemektedir.*
- *Paket Fonksiyonları* ***Async*** *Olarak Çalışmaktadır,* ***await*** *Yapısı Veya* ***then()*** *Kullanmalısınız.* 

## Nasıl İndirilir?
```shell
$ npm i burc-yorum

$ yarn add burc-yorum

$ pnpm i burc-yorum
```


#
### Günlük Burç Yorum
```js
const burc = require('burc-yorum');

burc.daily('akrep').then((yorum) => {
console.log(yorum);   
})
```

#
### Haftalık Burç Yorum
```js
const burc = require('burc-yorum');

burc.weekly('akrep').then((yorum) => {
console.log(yorum);   
})
```

#
### Aylık Burç Yorum
```js
const burc = require('burc-yorum');

burc.monthly('akrep').then((yorum) => {
console.log(yorum);   
})
```
#
### Burç Özellikleri
```js
const burc = require('burc-yorum');

burc.feature('akrep').then((yorum) => {
console.log(yorum);   
})
```
#
# İletişim & Destek & Bağış
<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)






