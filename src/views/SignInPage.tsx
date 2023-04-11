import { defineComponent, reactive } from 'vue';
import s from './SignInPage.module.scss';
import { MainLayout } from '../layouts/MainLayout';
import { Icon } from '../shared/Icon';
import { Form, FormItem } from '../shared/Form';
import { Button } from '../shared/Button';
import { validate } from '../shared/validate';
export const SignInPage = defineComponent({
  setup: (props, context) => {
    const formData = reactive({ email: '', code: '' });
    const errors = reactive({
      email: [],
      code: [],
    });

    const submit = (e: Event) => {
      e.preventDefault();
      Object.assign(errors, {
        email: [],
        code: [],
      });
      const newErrors = validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        {
          key: 'email',
          type: 'pattern',
          regexp: /.*@.+/,
          message: '必须是邮箱地址',
        },
        { key: 'code', type: 'required', message: '必填' },
      ]);
      Object.assign(errors, newErrors);
    };
    return () => (
      <>
        <MainLayout>
          {{
            title: () => '登录',
            icon: () => <Icon name="back" />,
            default: () => (
              <div class={s.wrapper}>
                <div class={s.logo}>
                  <Icon class={s.icon} name="mangosteen" />
                  <h1 class={s.appName}>山竹记账</h1>
                </div>
                <Form onSubmit={submit}>
                  <FormItem
                    label="邮箱地址"
                    type="text"
                    v-model={formData.email}
                    placeholder="请输入邮箱地址"
                    error={errors.email?.[0]}
                  ></FormItem>
                  <FormItem
                    label="验证码"
                    type="validationCode"
                    placeholder="请输入验证码"
                    v-model={formData.code}
                    error={errors.code?.[0]}
                  ></FormItem>
                  <FormItem style={{ paddingTop: '32px' }}>
                    <Button type="submit">登陆</Button>
                  </FormItem>
                </Form>
              </div>
            ),
          }}
        </MainLayout>
      </>
    );
  },
});
