'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Günlük Burç Yorumu Yapar.
 * @param {string} burc - Bir Burç Adı Giriniz.
 * @example var yorum = await burc.daily("akrep");
 * @typedef {String} daily
 * @property {string} burc - Bir Burç Adı Giriniz.
 * @property {?string} burc - "akrep".
 */

module.exports.daily = async (burc) => {
    try {
        if(!burc || burc == null || !burc.length > 0 || typeof burc !== 'string')return console.log("[burc-yorum] String Değer Olarak Bir Burç Adı Girmeniz Gerekiyor!")
        if (burc.toLowerCase() == 'oğlak' || burc.toLowerCase() == 'oglak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/oglak-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        } else if (burc.toLowerCase() == 'koç' || burc.toLowerCase() == 'koc') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/koc-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        } else if (burc.toLowerCase() == 'aslan') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/aslan-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'akrep') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/akrep-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'terazi' || burc.toLowerCase() == 'terazı') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/terazi-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'balık' || burc.toLowerCase() == 'balik') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/balik-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'boğa' || burc.toLowerCase() == 'boga') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/boga-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'kova') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/kova-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'basak' || burc.toLowerCase() == 'başak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/basak-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'yay') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yay-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'ikizler' || burc.toLowerCase() == 'ıkızler') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/ikizler-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else if (burc.toLowerCase() == 'yengec' || burc.toLowerCase() == 'yengeç') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yengec-burcu/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p:nth-child(2)`).text()}`
        }else{return console.log("[burc-yorum] Girilen Değer Burçlar Arasında Bulunmuyor!")}

    } catch (err) {
        return console.log('\x1b[38;5;160mBeklenmedik Bir Hata Gerçekleşti;\x1B[0m ' + err.message);
    }
}



/**
 * Haftalık Burç Yorumu Yapar.
 * @param {string} burc - Bir Burç Adı Giriniz.
 * @example var yorum = await burc.weekly("akrep");
 * @typedef {String} weekly
 * @property {string} burc - Bir Burç Adı Giriniz.
 * @property {?string} burc - "akrep".
 */
module.exports.weekly = async (burc) => {
    try {
        if(!burc || burc == null || !burc.length > 0 || typeof burc !== 'string')return console.log("[burc-yorum] String Değer Olarak Bir Burç Adı Girmeniz Gerekiyor!")
        if (burc.toLowerCase() == 'oğlak' || burc.toLowerCase() == 'oglak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/oglak-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        } else if (burc.toLowerCase() == 'koç' || burc.toLowerCase() == 'koc') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/koc-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        } else if (burc.toLowerCase() == 'aslan') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/aslan-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'akrep') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/akrep-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'terazi' || burc.toLowerCase() == 'terazı') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/terazi-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'balık' || burc.toLowerCase() == 'balik') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/balik-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'boğa' || burc.toLowerCase() == 'boga') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/boga-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'kova') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/kova-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'basak' || burc.toLowerCase() == 'başak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/basak-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'yay') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yay-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'ikizler' || burc.toLowerCase() == 'ıkızler') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/ikizler-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'yengec' || burc.toLowerCase() == 'yengeç') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yengec-burcu-haftalik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else{return console.log("[burc-yorum] Girilen Değer Burçlar Arasında Bulunmuyor!")}

    } catch (err) {
        return console.log('\x1b[38;5;160mBeklenmedik Bir Hata Gerçekleşti;\x1B[0m ' + err.message);
    }
}



/**
 * Aylık Burç Yorumu Yapar.
 * @param {string} burc - Bir Burç Adı Giriniz.
 * @example var yorum = await burc.monthly("akrep");
 * @typedef {String} monthly
 * @property {string} burc - Bir Burç Adı Giriniz.
 * @property {?string} burc - "akrep".
 */
module.exports.monthly = async (burc) => {
    try {
        if(!burc || burc == null || !burc.length > 0 || typeof burc !== 'string')return console.log("[burc-yorum] String Değer Olarak Bir Burç Adı Girmeniz Gerekiyor!")
        if (burc.toLowerCase() == 'oğlak' || burc.toLowerCase() == 'oglak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/oglak-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        } else if (burc.toLowerCase() == 'koç' || burc.toLowerCase() == 'koc') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/koc-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        } else if (burc.toLowerCase() == 'aslan') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/aslan-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'akrep') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/akrep-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'terazi' || burc.toLowerCase() == 'terazı') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/terazi-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'balık' || burc.toLowerCase() == 'balik') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/balik-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'boğa' || burc.toLowerCase() == 'boga') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/boga-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'kova') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/kova-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'basak' || burc.toLowerCase() == 'başak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/basak-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'yay') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yay-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'ikizler' || burc.toLowerCase() == 'ıkızler') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/ikizler-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'yengec' || burc.toLowerCase() == 'yengeç') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yengec-burcu-aylik-yorum/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else{return console.log("[burc-yorum] Girilen Değer Burçlar Arasında Bulunmuyor!")}

    } catch (err) {
        return console.log('\x1b[38;5;160mBeklenmedik Bir Hata Gerçekleşti;\x1B[0m ' + err.message);
    }
}


/**
 * Burç Özelliklerini Gösterir.
 * @param {string} burc - Bir Burç Adı Giriniz.
 * @example var ozellik = await burc.feature("akrep");
 * @typedef {String} feature
 * @property {string} burc - Bir Burç Adı Giriniz.
 * @property {?string} burc - "akrep".
 */
module.exports.feature = async (burc) => {
    try {
        if(!burc || burc == null || !burc.length > 0 || typeof burc !== 'string')return console.log("[burc-yorum] String Değer Olarak Bir Burç Adı Girmeniz Gerekiyor!")
        if (burc.toLowerCase() == 'oğlak' || burc.toLowerCase() == 'oglak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/oglak-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        } else if (burc.toLowerCase() == 'koç' || burc.toLowerCase() == 'koc') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/koc-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        } else if (burc.toLowerCase() == 'aslan') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/aslan-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'akrep') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/akrep-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'terazi' || burc.toLowerCase() == 'terazı') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/terazi-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'balık' || burc.toLowerCase() == 'balik') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/balik-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'boğa' || burc.toLowerCase() == 'boga') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/boga-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'kova') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/kova-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'basak' || burc.toLowerCase() == 'başak') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/basak-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'yay') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yay-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'ikizler' || burc.toLowerCase() == 'ıkızler') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/ikizler-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else if (burc.toLowerCase() == 'yengec' || burc.toLowerCase() == 'yengeç') {
            var res = await axios.get('https://www.hurriyet.com.tr/mahmure/astroloji/yengec-burcu-ozellikleri/');
            var $ = cheerio.load(res.data);
            return `${$(`body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`).text()}`
        }else{return console.log("[burc-yorum] Girilen Değer Burçlar Arasında Bulunmuyor!")}

    } catch (err) {
        return console.log('\x1b[38;5;160mBeklenmedik Bir Hata Gerçekleşti;\x1B[0m ' + err.message);
    }
}
