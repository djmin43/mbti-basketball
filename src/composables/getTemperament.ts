import { ref, computed } from 'vue'

const getTemperament = () => {
    const answers = ref<any>([])
    const temperamentResult = ref<any>([])
    const temperament = computed(() => {
        return temperamentResult.value.join("")
    })
    const temperamentCalculator = () => {
        const iCount = answers.value.filter((item: string)=> item === "I").length
        const eCount = answers.value.filter((item: string)=> item === "E").length
        const sCount = answers.value.filter((item: string)=> item === "S").length
        const nCount = answers.value.filter((item: string)=> item === "N").length
        const tCount = answers.value.filter((item: string)=> item === "T").length
        const fCount = answers.value.filter((item: string)=> item === "F").length
        const pCount = answers.value.filter((item: string)=> item === "P").length
        const jCount = answers.value.filter((item: string)=> item === "J").length

        if (iCount > eCount) { temperamentResult.value.push("I") } else { temperamentResult.value.push("E") }
        if (sCount > nCount) { temperamentResult.value.push("S") } else { temperamentResult.value.push("N") }
        if (tCount > fCount) { temperamentResult.value.push("T") } else { temperamentResult.value.push("F") }
        if (pCount > jCount) { temperamentResult.value.push("P") } else { temperamentResult.value.push("J") }
    }

    return { answers, temperamentCalculator, temperamentResult, temperament }

}

export default getTemperament