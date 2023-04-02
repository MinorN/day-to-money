import { defineComponent, ref } from 'vue';
import s from './ItemCreate.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tab, Tabs } from '../../shared/Tabs';
export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const refKind = ref('支出');
    return () => (
      <div>
        <MainLayout>
          {{
            title: () => '记一笔',
            icon: () => <Icon name="back" class={s.navIcon} />,
            default: () => (
              <>
                <Tabs v-model:selected={refKind.value}>
                  <Tab name="支出"></Tab>
                  <Tab name="收入"></Tab>
                </Tabs>
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});