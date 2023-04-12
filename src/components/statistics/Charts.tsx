import { defineComponent, onMounted, PropType, ref } from 'vue';
import s from './Charts.module.scss';
import { FormItem } from '../../shared/Form';
import * as echarts from 'echarts';
export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    const category = ref('expenses');
    const refDiv = ref<HTMLDivElement>();
    onMounted(() => {
      if (refDiv.value === undefined) {
        return;
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(refDiv.value);
      // 绘制图表
      myChart.setOption({
        grid: [{ left: 0, top: 0, right: 0, bottom: 20 }],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      });
    });
    return () => (
      <div class={s.wrapper}>
        <FormItem
          label="类型"
          type="select"
          options={[
            { value: 'expenses', text: '支出' },
            { value: 'income', text: '收入' },
          ]}
          v-model={category.value}
        />
        <div ref={refDiv} class={s.demo}></div>
      </div>
    );
  },
});
