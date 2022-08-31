import create from "zustand";


export type ChoiceKey = "liquidity" | "name"
 export type ChoiceValue = "ASC" | "DSC"
type Choice = {
    key: ChoiceKey,
    value: ChoiceValue 
}
interface FilterState {
    choice: Choice 
    setChoice: (val: Choice ) => void
}

const useFilters = create<FilterState>((set) => ({
    choice: {key: "liquidity", value:"ASC"},
    setChoice: (val) => set(() => ({choice: val}))
}))

export default useFilters;