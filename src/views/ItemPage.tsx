import { defineComponent } from 'vue';
import s from './ItemPage.module.scss';
export const ItemPage = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.itemPage}>ItemPage</div>;
  },
});
