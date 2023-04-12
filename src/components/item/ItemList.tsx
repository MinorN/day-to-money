import { defineComponent } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { OverlayIcon } from '../../shared/Overlay';
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout';
import { ItemSummary } from './ItemSummary';
export const ItemList = defineComponent({
  setup: () => {
    return () => (
      <MainLayout>
        {{
          title: () => '山竹记账',
          icon: () => <OverlayIcon />,
          default: () => <TimeTabsLayout component={ItemSummary} />,
        }}
      </MainLayout>
    );
  },
});
