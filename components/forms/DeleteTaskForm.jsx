'use client'

import {useFormState} from 'react-dom'
import {cn} from '@/lib/utils/mergeCss'
import {FormControl, Input, Label} from '.'
import { deleteAction } from '@/actions/deleteTaskAction'
import { toast } from 'sonner'

const initialState= {
	message:'default',
}

function DeleteTaskForm({children, className, uid, payload}) {
	const [state, formAction] =  useFormState(deleteAction, initialState)
	const {task, category} = payload
	if(state.message === "success"){
		toast
			(<aside className="bg-lime-200 rounded-lg py-6 text-center">
				<p>toast message was saved successfully</p>
			</aside>
		)
	}
	return (
		<section>
			<header>
				<h2 className="terxt-xs font-light">
					Form State: <span className="font-bold text-green-500">{state.message}</span>
				</h2>
			</header>
			<form action={formAction} className={cn('space-y-5  bg-white py-8 px-4', className)}>
			<FormControl className="flex flex-col">
					<Input type="hidden" name="uid" value={uid} />
				</FormControl>
				<FormControl className="flex flex-col">
					<Label htmlFor="category">Category</Label>
					<Input id="category" name="category" defaultValue={category}/>
				</FormControl>
				<FormControl className="flex flex-col">
					<Label htmlFor="task">Task</Label>
					<Input id="task" name="task" defaultValue={task} />
				</FormControl>
				<FormControl className="pt-3">
					<button className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">Delete Task</button>
				</FormControl>
			</form>
		</section>
	)
}

export {DeleteTaskForm}
