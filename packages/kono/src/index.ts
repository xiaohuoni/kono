import { proxy, subscribe } from './vanilla';

if (!(window as any).kono) {
  // namespace
  const kono = ((window as any).kono = {});
  const state = proxy(kono);
  subscribe(state, () => console.log('state has changed to', state));
}

// 生成随机id
export const createId = (slength = 12, prefix?: any, id?: any) => {
  let uid = id;
  if (!uid) {
    uid = `${Math.random()}`.slice(slength);
  }
  return prefix ? `${prefix}_${uid}` : uid;
};

class ClassManager {
  public id: string;
  public key: number;
  public instanceId: number;

  constructor(props: any) {
    this.key = 0 | (Math.random() * 998);
    this.instanceId = 0 | (Math.random() * 998);
    this.id = props?.id || createId();
  }
  public getNewID() {
    return `${this.id}${this.key++}`;
  }
  public getNewInstanceId() {
    return `${this.id}${this.instanceId++}`;
  }
}

var classManager = new ClassManager({});
