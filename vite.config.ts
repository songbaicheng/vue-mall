import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// 项目 src 目录
const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`, // 使用 ～ 作为 src 目录的别名
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`, // 引入自定义空间
      },
    },
  },
  plugins: [
    vue(),
    Components({
      extensions: ['vue', 'md'], // 指定可以自动加载的文件扩展名
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/], // 指定可以自动加载的文件匹配模式
      resolvers: [
        ElementPlusResolver({ // 以支持 Element Plus 组件库的自动导入和注册
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts', // 指定生成的类型声明文件的路径
    }),
    Unocss({ // 集成了 Unocss 并配置了一些优化规则和特性
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),
  ],
})
