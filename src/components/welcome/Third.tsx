import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import sheet from '../../assets/icons/sheet.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Third = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={sheet} alt="" />,
      title: () => (
        <h2>
          数据可视化
          <br />
          收支一目了然
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/4">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});