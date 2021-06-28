import { ref, computed } from 'vue'

interface sol {
    type: string,
    image: string
}

const getSolutions = () => {

    const solutionData = ref<sol[]>([])

    const bringSolutions = async (temperament: string) =>{
        try {
        const data = await fetch('solutions.json')
        const res = await data.json()
        const temp = await res.filter((item: any) => {
            return item.type === temperament
        })
        console.log(temp)
        
        } catch(err) {
            console.log(err)
        }
    }


    return {
        bringSolutions, solutionData
    }
}





export default getSolutions