import { defineComponent, ref } from 'vue';
import s from './InputPad.module.scss';
import { Icon } from '../../shared/Icon';
import { DatePicker, Popup } from 'vant';
import { time } from '../../shared/time';
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
    const now = new Date();
    const refDate = ref();
    const refShowPop = ref(false);
    refDate.value = time(now).format().split('-');
    const date = ref<Date>();
    const onConfirm = () => {
      refShowPop.value = false;
      date.value = new Date(refDate.value.join(','));
    };
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>
              <span onClick={() => (refShowPop.value = !refShowPop.value)}>
                {time(date.value || now).format()}
              </span>
              <Popup v-model:show={refShowPop.value} position="bottom">
                <DatePicker
                  v-model={refDate.value}
                  title="选择日期"
                  onConfirm={onConfirm}
                  onCancel={() => (refShowPop.value = false)}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>1999.12</span>
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
