'use server'

import {ref, set, push, update} from 'firebase/database';
import { db } from '@/lib/firebase/firebaseInit';
import { revalidatePath } from 'next/cache';

export async function editAction(prevState, formData){
const category = formData.get('category')
const task = formData.get('task')
const uid = formData.get('uid')

const newObj ={
    task,
    category,
}
const response = await editTask(newObj, uid)

revalidatePath('/demo')
return{message: response}
}

async function editTask(task, uid){
    const path = `todos/${uid}`
    const dbRef = ref(db, path)

    try{
        await update(dbRef, task)
        return 'success'
    }
    catch(error){
        return 'failure'
    }
}

