import { Icon } from '../../shared/Icon';
import { defineComponent } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { TagForm } from './TagForm';
import { Button } from '../../shared/Button';
import s from './Tag.module.scss';
export const TagEdit = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => '新建标签',
          icon: () => <Icon name="back" onClick={() => {}} />,
          default: () => (
            <>
              <TagForm />
              <div class={s.actions}>
                <Button level="danger" class={s.removeTags}>
                  删除标签
                </Button>
                <Button level="danger" class={s.removeTagsAndItems}>
                  删除标签和记账
                </Button>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
