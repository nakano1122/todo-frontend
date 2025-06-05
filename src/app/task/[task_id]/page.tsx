interface TaskListPageProps {
  params: {
    task_id: string;
  };
}

const TaskListPage = async ({ params }: TaskListPageProps) => {
  const { task_id } = await params;
  return (
    <div className="bg-white shadow px-5 py-4 rounded-xl flex flex-col items-center">
      Task ID: {task_id}
    </div>
  );
};

export default TaskListPage;
