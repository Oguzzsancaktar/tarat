import { IRegisterCredentials, IUserValidation } from '@packages/interfaces'
import { createContext, useContext, useMemo, useReducer } from 'react'
import { DEFAULTS } from '../constants'

export enum EReducerActionKind {
  SET_DATA = 'SET_DATA',
  SET_VALIDATION = 'SET_VALIDATION',
  PREV = 'PREV',
  NEXT = 'NEXT',
  SUBMIT = 'SUBMIT',
  RESET = 'RESET',
}

interface IReducerAction {
  type: EReducerActionKind
  payload?: IRegisterCredentials | IUserValidation
}

export interface IRegisterState {
  data: IRegisterCredentials
  validation: IUserValidation
  step: number
}

interface IRegisterApi {
  setData: (data: IRegisterCredentials) => void
  setValidation: (validation: IUserValidation) => void
  changeStep: (type: EReducerActionKind.NEXT | EReducerActionKind.PREV) => void
  reset: () => void
}

const initialApi: IRegisterApi = {
  setData: () => {},
  setValidation: () => {},
  changeStep: () => {},
  reset: () => {},
}

const RegisterStateContext = createContext(DEFAULTS.initialRegisterState)
const RegisterApiContext = createContext(initialApi)

const useRegisterStateContext = () => {
  const ctx = useContext(RegisterStateContext)

  if (!ctx) {
    throw new Error('useRegisterStateContext must be used within a RegisterStateContextProvider')
  }

  return ctx
}

const useRegisterApiContext = () => {
  const ctx = useContext(RegisterApiContext)

  if (!ctx) {
    throw new Error('useRegisterApiContext must be used within a RegisterApiContextProvider')
  }

  return ctx
}

const reducer = (state: IRegisterState, action: IReducerAction): IRegisterState => {
  const { type, payload } = action
  switch (type) {
    case EReducerActionKind.PREV:
      return {
        ...state,
        step: state.step - 1,
      }
    case EReducerActionKind.NEXT:
      return {
        ...state,
        step: state.step + 1,
      }
    case EReducerActionKind.SET_DATA:
      return {
        ...state,
        data: payload as IRegisterCredentials,
      }
    case EReducerActionKind.SET_VALIDATION:
      return {
        ...state,
        validation: payload as IUserValidation,
      }
    case EReducerActionKind.RESET:
      return DEFAULTS.initialRegisterState

    default:
      throw new Error(`Unknown action type ${type}`)
  }
}

interface IProps {
  children: React.ReactNode
}

const RegisterContextProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULTS.initialRegisterState)

  const registerApi = useMemo<IRegisterApi>(() => {
    return {
      changeStep: (type: EReducerActionKind.NEXT | EReducerActionKind.PREV) =>
        dispatch({ type: type }),
      setData: (data: IRegisterCredentials) =>
        dispatch({ type: EReducerActionKind.SET_DATA, payload: data }),
      setValidation: (validation: IUserValidation) =>
        dispatch({ type: EReducerActionKind.SET_VALIDATION, payload: validation }),
      reset: () => dispatch({ type: EReducerActionKind.RESET }),
    }
  }, [dispatch])

  return (
    <RegisterStateContext.Provider value={state}>
      <RegisterApiContext.Provider value={registerApi}>{children}</RegisterApiContext.Provider>
    </RegisterStateContext.Provider>
  )
}

export { useRegisterStateContext, useRegisterApiContext, RegisterContextProvider }
