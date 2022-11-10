import isEqual from 'lodash.isequal';
import { proxy, subscribe } from './vanilla';
const mergeProxyObject = (p, obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(typeof obj[key])
    if (!(typeof obj[key]).includes('object') || !isEqual(p[key], obj[key]))
      // 如果值不是 obj 这里不需要 isEqual，直接设置就行，如果是相同的值，不会触发更新
      p[key] = obj[key];
  });
};
class N {
  public a: string;
  public prop: any;
  public style: any;
  constructor(props: any) {
    this.a = props.a;
    this.prop = proxy(props.prop || {});
    this.style = proxy(props.style || {});
    subscribe(this.prop, (ddd) => console.log('prop has changed to', ddd));
    subscribe(this.style, (ddd) => console.log('style has changed to', ddd));
  }
  public setA(data: string) {
    this.a = data;
  }
  public setProp(data: any): void {
    mergeProxyObject(this.prop, data);
  }
  public setStyle(data: any) {
    mergeProxyObject(this.style, data);
  }
}
// namespace
const n = new N({ a: 1, prop: { a: '123', b: '2', c: [1,2] } });
// const state = proxy(n);
// subscribe(state, () => console.log('state has changed to', state));
// console.log('subscribe state')
setTimeout(() => {
  console.log('subscribe state1');
  n.setProp({ c: [1,23] });
  n.setStyle({ a: '212' });
}, 1000);
