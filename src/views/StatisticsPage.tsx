import { defineComponent, ref } from 'vue';
import s from './StatisticsPage.module.scss';
import { MainLayout } from '../layouts/MainLayout';
import { Icon } from '../shared/Icon';
import { TimeTabsLayout } from '../layouts/TimeTabsLayout';
import { Charts } from '../components/statistics/Charts';
export const StatisticsPage = defineComponent({
  setup: () => {
    return () => (
      <MainLayout>
        {{
          title: () => '统计图表',
          icon: () => <Icon name="back" />,
          default: () => <TimeTabsLayout component={Charts} />,
        }}
      </MainLayout>
    );
  },
});
