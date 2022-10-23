import createInitialScreen from './generators/createInitialScreen'
import setInitialStates from './storers/setInitialStates'

function app(): void {
    createInitialScreen()
    setInitialStates()
}

export default app
