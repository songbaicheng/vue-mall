import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 项目 src 目录
const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`, // 使用 ～ 作为 src 目录的别名
    },
  },
  plugins: [
    vue(),
    Components({
      extensions: ['vue', 'md'], // 指定可以自动加载的文件扩展名
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/], // 指定可以自动加载的文件匹配模式
      dts: 'src/components.d.ts', // 指定生成的类型声明文件的路径
    })
  ],
})
