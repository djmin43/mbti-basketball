import { ref } from 'vue'

const getTemperament = () => {
    const answers = ref<any>([])
    const temperament = ref<any>([])
    const temperamentCalculator = () => {
        const iCount = answers.value.filter((item: string)=> item === "I").length
        const eCount = answers.value.filter((item: string)=> item === "E").length
        const sCount = answers.value.filter((item: string)=> item === "S").length
        const nCount = answers.value.filter((item: string)=> item === "N").length
        const tCount = answers.value.filter((item: string)=> item === "T").length
        const fCount = answers.value.filter((item: string)=> item === "F").length
        const pCount = answers.value.filter((item: string)=> item === "P").length
        const jCount = answers.value.filter((item: string)=> item === "J").length

        if (iCount > eCount) { temperament.value.push("I") } else { temperament.value.push("E") }
        if (sCount > nCount) { temperament.value.push("S") } else { temperament.value.push("N") }
        if (tCount > fCount) { temperament.value.push("T") } else { temperament.value.push("F") }
        if (pCount > jCount) { temperament.value.push("P") } else { temperament.value.push("J") }
        console.log(temperament)
    }

    return { answers, temperamentCalculator, temperament }

}

export default getTemperament