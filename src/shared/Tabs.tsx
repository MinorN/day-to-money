import { PropType, defineComponent } from 'vue';
import s from './Tabs.module.scss';
export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
    },
    classPrefix: {
      type: String as PropType<string>,
    },
  },
  setup: (props, { slots, emit }) => {
    return () => {
      const array = slots.default?.();
      if (!array) return () => null;
      for (let i = 0; i < array.length; i++) {
        if (array[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children');
        }
      }
      const cp = props.classPrefix;
      return (
        <div class={[s.tabs, cp + '_tabs']}>
          <ol class={[s.tabs_nav, cp + '_tabs_nav']}>
            {array.map((item) => (
              <li
                class={[
                  item.props?.name === props.selected
                    ? [s.selected, cp + '_selected']
                    : '',
                  cp + '_tabs_nav_item',
                ]}
                onClick={() => {
                  emit('update:selected', item.props?.name);
                }}
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div>{array.find((item) => item.props?.name === props.selected)}</div>
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
