import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
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
    AutoImport({
      resolvers: [ElementPlusResolver()], // 第三方组件库的解析器
      dts: 'src/auto-imports.d.ts', // 指定生成的自动导入声明文件的路径
    }),
    Components({
      dirs: ['src/components/', 'src/views/'], // 指定组件所在位置，默认为 src/components
      extensions: ['vue', 'md'], // 指定可以自动加载的文件扩展名
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/], // 指定可以自动加载的文件匹配模式
      resolvers: [ElementPlusResolver()], // 解析的 UI 组件库
      dts: 'src/components.d.ts', // 指定生成的组件声明文件的路径
    })
  ],
})