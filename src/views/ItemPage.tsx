import { defineComponent } from 'vue';
import s from './ItemPage.module.scss';
import { MainLayout } from '../layouts/MainLayout';
import { Icon } from '../shared/Icon';
import { RouterView } from 'vue-router';
export const ItemPage = defineComponent({
  setup: (props, context) => {
    return () => <RouterView />;
  },
});
