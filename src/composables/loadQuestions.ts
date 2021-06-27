import { ref, reactive } from 'vue'

const loadQuestions =  () => {
    const questions = ref<any>([])

    const load = async () => {
    try {
        const res = await fetch('questions.json')
        const data = await res.json()
        questions.value = data
        console.log('data')
    }
    catch (err) {
        console.log(err)
    }
}

    return { load, questions }

}



export default loadQuestions;