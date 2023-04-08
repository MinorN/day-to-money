import { defineComponent, ref } from 'vue';
import s from './InputPad.module.scss';
import { Icon } from '../../shared/Icon';
import { DatePicker, Popup } from 'vant';
import { Time } from '../../shared/time';
export const InputPad = defineComponent({
  setup: (props, context) => {
    const refAmount = ref('0');
    const appendText = (n: number | string) => {
      const nString = n.toString();
      const dotIndex = refAmount.value.indexOf('.');
      if (refAmount.value.length >= 13) {
        return;
      }
      if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) {
        return;
      }
      if (nString === '.') {
        if (dotIndex >= 0) {
          return;
        }
        if (refAmount.value === '0') {
          refAmount.value = '0.';
          return;
        }
      } else {
        if (refAmount.value === '0') {
          refAmount.value = nString;
          return;
        }
      }
      refAmount.value += nString;
    };
    const buttons = [
      {
        text: '1',
        onClick: () => {
          appendText(1);
        },
      },
      {
        text: '2',
        onClick: () => {
          appendText(2);
        },
      },
      {
        text: '3',
        onClick: () => {
          appendText(3);
        },
      },
      {
        text: '4',
        onClick: () => {
          appendText(4);
        },
      },
      {
        text: '5',
        onClick: () => {
          appendText(5);
        },
      },
      {
        text: '6',
        onClick: () => {
          appendText(6);
        },
      },
      {
        text: '7',
        onClick: () => {
          appendText(7);
        },
      },
      {
        text: '8',
        onClick: () => {
          appendText(8);
        },
      },
      {
        text: '9',
        onClick: () => {
          appendText(9);
        },
      },
      {
        text: '.',
        onClick: () => {
          appendText('.');
        },
      },
      {
        text: '0',
        onClick: () => {
          appendText(0);
        },
      },
      {
        text: '清空',
        onClick: () => {
          refAmount.value = '0';
        },
      },
      { text: '提交', onClick: () => {} },
    ];
    const now = new Date();
    const refDate = ref();
    const refShowPop = ref(false);
    refDate.value = new Time(now).format().split('-');
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
                {new Time(date.value || now).format()}
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
          <span class={s.amount}>{refAmount.value}</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button onClick={button.onClick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
