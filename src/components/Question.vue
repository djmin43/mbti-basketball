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
    <!-- <div v-if="temperamentResult.length > 0 && renderSolution === false" > -->
    <div >
        <Solution @test="calculateSolution(temperament)" :temperament="temperament" />
        <h3 v-if="renderSolution === false">asjdkf</h3>
        {{ solutionData }}
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import loadQuestions from '../composables/loadQuestions'
import getTemperament from '../composables/getTemperament'
import Solution from './Solution.vue'
import getSolutions from '../composables/getSolutions'

interface SolType {
    type: String,
    image: String
}

export default defineComponent ({
    name:"Question",
    components: {
        Solution
    },
    setup () {
        const renderSolution = ref<boolean>(false)
        const { load, questions, currentQuestion, questionNumber } = loadQuestions()
        const { answers, temperamentCalculator, temperamentResult, temperament } = getTemperament()
        const { bringSolutions, solutionData } = getSolutions()
        load()

        const calculateSolution = (temperament: string) =>{
            renderSolution.value = !renderSolution.value
            bringSolutions(temperament)
        }   
        
        const handleAnswer = (answer: string) => {
            answers.value.push(answer)
            questionNumber.value++
            if ( questionNumber.value === 12) {
                temperamentCalculator()
            }
        }


        return { 
            questionNumber, questions, currentQuestion, answers, handleAnswer, getTemperament, temperamentResult, temperament, renderSolution, calculateSolution, solutionData

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
