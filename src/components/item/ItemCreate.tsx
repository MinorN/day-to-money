import { defineComponent } from 'vue';
import s from './ItemCreate.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
export const ItemCreate = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <MainLayout>
          {{
            title: () => '记一笔',
            icon: () => <Icon name="back" class={s.navIcon} />,
            default: () => (
              <>
                <div>xxx</div>
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
