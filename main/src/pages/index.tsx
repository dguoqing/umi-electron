import ModuleStyle from './index.less';
import { MainMenu, TaskList } from '@/components';

export default function IndexPage() {
  return (
    <div className={ModuleStyle.container}>
      <MainMenu />
      <TaskList />
    </div>
  );
}
