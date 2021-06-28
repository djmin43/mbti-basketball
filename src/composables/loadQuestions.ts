import { ref, computed } from 'vue'

const loadQuestions =  () => {
    const questions = ref<any>([])
    const questionNumber = ref<any>(0)

// Getting Questions API Call
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

// Getting Currnet Question
const currentQuestion = computed(() => {
    return questions.value[questionNumber.value]
})

    return { load, questions, currentQuestion, questionNumber }

}



export default loadQuestions;