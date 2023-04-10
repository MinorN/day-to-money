import { PropType, defineComponent } from 'vue';
import s from './Button.module.scss';

export const Button = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
    level: {
      type: String as PropType<'important' | 'normal' | 'danger'>,
      default: 'important',
    },
    type: {
      type: String as PropType<'submit' | 'button'>,
      default: 'button',
    },
  },
  setup: (props, context) => {
    return () => (
      <button class={[s.button, s[props.level]]} type={props.type}>
        {context.slots.default?.()}
      </button>
    );
  },
});
