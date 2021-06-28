import { ref, computed } from 'vue'

const loadQuestions =  () => {
    const questions = ref<any>([])
    const questionNumber = ref<any>(0)

    // Getting Questions API Call
    const load = async () => {
    try {
        const res = await fetch('questions.json')
        const data = await res.json()
        const shuffled = data
        .map((a: any) => ({sort: Math.random(), value: a}))
        .sort((a:any, b: any) => a.sort - b.sort)
        .map((a: any) => a.value)
        questions.value = shuffled
    }
    catch (err) {
        console.log(err)
    }
    }

    // Getting Currnet Question
    const currentQuestion = computed(() => {
        return questions.value[questionNumber.value]
    })

    return { load, questions, currentQuestion, questionNumber }

}




export default loadQuestions;