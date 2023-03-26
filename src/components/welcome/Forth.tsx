import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Forth = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={cloud} alt="" />,
      title: () => (
        <h2>
          云备份
          <br />
          再也不怕数据丢失
        </h2>
      ),
      buttons: () => {
        return (
          <>
            <RouterLink class={s.fake} to="/start">
              跳过
            </RouterLink>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
        );
      },
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});