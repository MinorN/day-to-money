import { defineComponent } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Button } from '../../shared/Button';
export const TagCreate = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <MainLayout>
          {{
            title: () => '新建标签',
            icon: () => <Icon name="back" onClick={() => {}} />,
            default: () => (
              <form action="">
                <div>
                  <label htmlFor="">
                    <span>标签名</span>
                    <input type="text" />
                  </label>
                  <label htmlFor="">
                    <span>符号</span>
                    <div>
                      <nav>
                        <span>表情</span>
                        <span>首饰</span>
                        <span>首饰</span>
                        <span>首饰</span>
                        <span>首饰</span>
                        <span>首饰</span>
                      </nav>
                      <ol>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                      </ol>
                    </div>
                  </label>
                </div>
                <div>
                  <p>记账时长按标签即可进行编辑</p>
                </div>
                <div>
                  <Button>保存</Button>
                </div>
              </form>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
