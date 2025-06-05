import RelatedTaskList from "./components/RelatedTaskList";
import TaskMain from "./components/TaskMain";

interface TaskListPageProps {
  params: {
    task_id: string;
  };
}

const TaskListPage = async ({ params }: TaskListPageProps) => {
  const { task_id } = await params;
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start w-full justify-between gap-3 py-1">
      <div className="flex flex-col w-3/5 gap-3">
        <TaskMain task_id={task_id} />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col w-2/5 gap-3">
        <RelatedTaskList />
      </div>
    </div>
  );
};

export default TaskListPage;
