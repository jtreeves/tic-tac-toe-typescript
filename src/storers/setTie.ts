import setValue from './setValue'

function setTie(
    tie: boolean
): void {
    const stringTie: string = String(tie)
    
    setValue('tie', stringTie)
}

export default setTie
