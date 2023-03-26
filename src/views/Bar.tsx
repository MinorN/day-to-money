import { defineComponent } from 'vue';
export const Bar = defineComponent({
    setup: (props, context) => {
        return () => (
            <div>我是Bar</div>
        )
    }
})