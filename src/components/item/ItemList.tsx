import { defineComponent, ref } from 'vue';
import s from './ItemList.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tab, Tabs } from '../../shared/Tabs';
import { ItemSummary } from './ItemSummary';
export const ItemList = defineComponent({
  setup: (props, context) => {
    const refSelected = ref('本月');
    return () => (
      <>
        <MainLayout>
          {{
            title: () => '山竹记账',
            icon: () => <Icon name="menu" />,
            default: () => {
              return (
                <Tabs
                  v-model:selected={refSelected.value}
                  classPrefix="customTabs"
                >
                  <Tab name="本月">{/* <ItemSummary /> */}</Tab>
                  <Tab name="上月">{/* <ItemSummary /> */}</Tab>
                  <Tab name="今年">{/* <ItemSummary /> */}</Tab>
                  <Tab name="自定义">{/* <ItemSummary /> */}</Tab>
                </Tabs>
              );
            },
          }}
        </MainLayout>
      </>
    );
  },
});
