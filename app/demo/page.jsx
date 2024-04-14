import {ToDoList} from '@/components/todos/ToDoList'
import {AddTask} from '@/components/dialogs/AddTask'
import {ToDoListItem} from '@/components/todos/ToDoListItem'

import { getToDoItems } from '@/lib/firebase/api'

async function DemoPage({children}) {
	const payload = await getToDoItems()
	const tasks = Object.entries(payload.todos).reverse()
	return (
		<>
			<header className="text-center pt-28">
				<h2 className="text-5xl text-slate-900">Demo Page Component </h2>
			</header>
			<main className="space-y-4 p-4 h-[475px] overflow-y-scroll shadow-sm rounded-md border border-neutral-200">
				<ToDoList>
					{tasks.map((task) => (
						<ToDoListItem key={task[0]} payload={task[1]}uid={task[0]} />
					))}
				</ToDoList>
				<AddTask />
			</main>
		</>
	)
}

export default DemoPage
