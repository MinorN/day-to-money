import { defineComponent } from 'vue';
import { Icon } from './Icon';
import s from './FloatButton.module.scss';
export const FloatButton = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name={props.name} class={s.icon} />
      </div>
    );
  },
});
