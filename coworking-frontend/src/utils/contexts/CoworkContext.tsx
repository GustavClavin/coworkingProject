import { createContext, PropsWithChildren, useContext, useState } from "react"
import { Cowork, Review } from "../types/interfaces"
import { getCoworkBySlug, getCoworks, _getReviews} from "../helpers/apiCalls"

interface CoworkContextType {
    coworks: Cowork[],
    coworkBySlug: Cowork | null
    error: string | null
    reviews: Review[]
    getOne: (slug: string) => Promise<Cowork | undefined>
    getAll: () => Promise<Cowork[] | undefined>
    getReviews: (slug: string) => Promise<Review[] | undefined>
    clearError: () => void
  }

const defaultState: CoworkContextType = {
    coworks: [],
    coworkBySlug: null,
    error: null,
    reviews: [],
    getOne: async (slug) => {return undefined},
    getAll: async () => [],
    getReviews: async (slug) => {return undefined},
    clearError: () => {}
}

const CoworkContext = createContext<CoworkContextType>(defaultState)

const CoworkProvider = ({ children }: PropsWithChildren) => {
    const [coworks, setCoworks] = useState<Cowork[]>(defaultState.coworks)
    const [reviews, setReviews] = useState<Review[]>(defaultState.reviews)
    const [coworkBySlug, setCoworkBySlug] = useState<Cowork | null>(defaultState.coworkBySlug)
    const [error, setError] = useState<string | null>(defaultState.error)

    const getAll = async () => {
        const response = await getCoworks()
        if(Array.isArray(response)){
            setCoworks(response)
            return response as Cowork[]
        }
        setError(response.message)
        
    }

    const getOne = async (slug: string) => {
        const response = await getCoworkBySlug(slug)
        if(response._id){
            setCoworkBySlug(response)
            return response as Cowork
        }
        setError(response.message)
        
    }

    const getReviews = async (slug: string): Promise<Review[] | undefined> => {
        const response = await _getReviews(slug)
        if(response){
            if(Array.isArray(response)){
                setReviews(response)
                return response as Review[]
            }
        }
    }

    const clearError = () => {
        setError('')
    }

    return(
        <CoworkContext.Provider value={{ coworks, coworkBySlug, reviews, error, getAll, getOne, getReviews, clearError}}>
            {children}
        </CoworkContext.Provider>
    )
}

const useCowork = () => {
    const cowork = useContext(CoworkContext)
    return cowork
}

export {
    CoworkProvider,
    useCowork
}