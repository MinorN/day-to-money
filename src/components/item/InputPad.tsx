import { defineComponent } from 'vue';
import s from './InputPad.module.scss';
import { Icon } from '../../shared/Icon';
export const InputPad = defineComponent({
  setup: (props, context) => {
    const buttons = [
      {
        text: '1',
        onclick: () => {},
      },
      {
        text: '2',
        onclick: () => {},
      },
      {
        text: '3',
        onclick: () => {},
      },
      {
        text: '清空',
        onclick: () => {},
      },
      {
        text: '4',
        onclick: () => {},
      },
      {
        text: '5',
        onclick: () => {},
      },
      {
        text: '6',
        onclick: () => {},
      },
      {
        text: '+',
        onclick: () => {},
      },
      {
        text: '7',
        onclick: () => {},
      },
      {
        text: '8',
        onclick: () => {},
      },
      {
        text: '9',
        onclick: () => {},
      },
      {
        text: '-',
        onclick: () => {},
      },
      {
        text: '.',
        onclick: () => {},
      },
      {
        text: '0',
        onclick: () => {},
      },
      {
        text: '删除',
        onclick: () => {},
      },
      {
        text: '提交',
        onclick: () => {},
      },
    ];
    return () => (
      <>
        <div>
          <span class={s.notes}>
            <Icon name="date" />
            <span>xxx</span>
          </span>
          <span class={s.amount}>数字</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button onClick={button.onclick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
