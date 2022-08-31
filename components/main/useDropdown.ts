import create from "zustand";


interface DropdownState {
    selected: Number | null, setSelected: (val: Number | null) => void
}

const useDropdown = create<DropdownState>((set) => ({
    selected: null,
    setSelected: (val) => set(() => ({selected: val}))
}))

export default useDropdown;