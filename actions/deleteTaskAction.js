'use server'

import {ref, set, push, remove} from 'firebase/database';
import { db } from '@/lib/firebase/firebaseInit';
import { revalidatePath } from 'next/cache';

export async function deleteAction(prevState, formData){

const uid = formData.get('uid')
const response = await removeFromRTDB(uid)
revalidatePath('/demo')
return {message: response}
}

async function removeFromRTDB(uid){
    const path = `todos/${uid}`
    const dbRef = ref(db, path)
    try{
        await remove(dbRef)
        return 'success'
    }
    catch(error){
        return 'failure'
    }
}

