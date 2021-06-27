<template>
    <div v-if="currentQuestion">
        <div class="question" >
            <h3 >Question: {{ currentQuestion.question }}  </h3>
        </div>
        <div class="choices">
            <button @click="handleAnswer(currentQuestion.answers.a)">{{ currentQuestion.choices.a}} </button>
            <button @click="handleAnswer(currentQuestion.answers.b)" >{{ currentQuestion.choices.b}} </button>
        </div>     
    </div>
    
    <button @click=" questionNumber++">up</button>
    <button @click=" questionNumber--">down</button>

    {{ questionNumber }}
    {{ answers }}
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, reactive, watch } from "vue";
import loadQuestions from '../composables/loadQuestions'

export default defineComponent ({
    name:"Question",
    setup () {
        const questionNumber = ref<any>(0)
        const answers = ref<any>([])
        const { load, questions } = loadQuestions()

        load()

        const currentQuestion = computed(() => {
            return questions.value[questionNumber.value]
        })

        const handleAnswer = (answer: string) => {
            answers.value.push(answer)
            questionNumber.value++
        }

        return { 
            questionNumber, questions, currentQuestion, answers, handleAnswer

        }
    }
})
</script>

<style>

.choices {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.choices button {
    padding: 1vw;
    margin: 1vw;
    color: white;
    background: #f57c00;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.choices button:active{
    background: #ff9800
}

</style>
