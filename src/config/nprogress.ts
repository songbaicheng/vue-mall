import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 进度条组件配置
NProgress.configure({
    easing: 'ease',
    speed: 300,
    showSpinner: true,
    trickleSpeed: 200,
    minimum: 0.3,
});

export default NProgress;