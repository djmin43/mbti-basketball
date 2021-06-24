import { ref } from 'vue'

const loadQuestions = () => {
    const questions = ref<any>([])
    const questionNumber = ref<number>(0)
    const question = ref<any>({})
    const load = async () => {
        try {
            const res = await fetch('questions.json')
            const data = await res.json()
            questions.value = data
            question.value = questions.value[questionNumber.value]

        }
        catch (err) {
            console.log(err)
        }
    };      
    return {load, questions, question, questionNumber}
}



export default loadQuestions;