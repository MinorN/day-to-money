import s from './welcome.module.scss';
import { defineComponent, ref, watchEffect } from 'vue';
export const First = defineComponent({
  setup() {
    // 如果我们这么写，需要写四编，重复 = shit
    // const div = ref<HTMLElement>();
    // // e.preventDefault() 取消浏览器滚动事件
    // const { swiping, direction } = useSwipe(div, {
    //   beforeStart: (e) => e.preventDefault(),
    // });
    // const router = useRouter();
    // watchEffect(() => {
    //   if (swiping.value && direction.value === 'left') {
    //     router.push('/welcome/2');
    //   }
    // });
    return () => (
      <div class={s.card}>
        <svg>
          <use xlinkHref="#pig"></use>
        </svg>
        <h2>
          会挣钱
          <br />
          还会省钱
        </h2>
      </div>
    );
  },
});
