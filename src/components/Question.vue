<template>
    <div class="choices">
        
        <div v-for="question in questions" :key="question.id">
            <p>{{question.question}} </p>
        </div>

        {{ answers }}
        {{ question }}
    </div>

</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import loadQuestions from '../composables/loadQuestions'

export default defineComponent ({
    name:"Question",
    setup () {
        const answers = ref<any[]>([])
        const { load, questions, question, questionNumber } = loadQuestions()

        onMounted(() => load())

        return { questions, answers, question, questionNumber }
    }
})
</script>

<style>

.choices{

    text-align: center;
}

.choices span {
    margin: 0.5vw;
    padding: 5vw 0;
    border: solid 1px ;
    border-radius: 3px;
}
</style>

question number(id)
Question
Choices(2)
choice -> answer, letter
