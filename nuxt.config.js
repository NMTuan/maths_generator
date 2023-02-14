/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-29 10:07:12
 * @LastEditTime: 2023-02-14 14:33:30
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezMaths\nuxt.config.js
 */

import transformerDirectives from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // '@unocss/reset/normalize.css',
        '@unocss/reset/tailwind.css',
        'simplebar-vue/dist/simplebar.min.css'
    ],
    modules: ['@unocss/nuxt', '@intlify/nuxt3', '@nuxtjs/color-mode'],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        transformers: [transformerDirectives()],
        shortcuts: [],
        rules: [],
        safelist: []
    },
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'zh-CN',
            fallbackLocale: 'zh-CN'
        }
    },
    colorMode: {
        classSuffix: ''
    }
})
