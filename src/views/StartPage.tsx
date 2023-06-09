import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import s from './StartPage.module.scss';
import { OverlayIcon } from '../shared/Overlay';
import { RouterLink } from 'vue-router';
import { MainLayout } from '../layouts/MainLayout';
export const StartPage = defineComponent({
  setup: (props, context) => {
    const overlayVisible = ref(false);
    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value;
    };
    return () => (
      <div>
        <MainLayout>
          {{
            title: () => '山竹记账',
            icon: () => <OverlayIcon />,
            default: () => (
              <>
                <Center class={s.pig_wrapper}>
                  <Icon name="pig" class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                  <RouterLink to="/items/create">
                    <Button class={s.button}>开始记账</Button>
                  </RouterLink>
                </div>
                <RouterLink to="/items/create">
                  <FloatButton name="add" />
                </RouterLink>
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
