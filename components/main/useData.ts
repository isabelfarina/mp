import { useEffect, useState } from "react";
import sampleSize from "lodash.samplesize"
import internal from "stream";
import useFilters from "./useFilters";
const data:TokenPair[] = [
  {
    id: 1,
    name: "USDC/SOL",
    liquidity: 800000,
    volume: 20000,
    APY: "100%",
    rewards: 700000,
  },
  {id: 2,
    name: "USDC/SOL",
    liquidity: 900000,
    volume: 23000,
    APY: "130%",
    rewards: 710000,
  },
  {id: 3,
    name: "USDC/MARCO",
    liquidity: 800000,
    volume: 16000,
    APY: "106%",
    rewards: 730000,
  },
  {id: 4,
    name: "USDC/MARCO",
    liquidity: 760000,
    volume: 14000,
    APY: "170%",
    rewards: 700300,
  },
  {id: 5,
    name: "USDC/SOL",
    liquidity: 840000,
    volume: 30000,
    APY: "105%",
    rewards: 710000,
  },
  {id: 6,
    name: "USDC/MARCO",
    liquidity: 820000,
    volume: 14000,
    APY: "120%",
    rewards: 760000,
  },{id: 7,
    name: "USDC/SOL",
    liquidity: 820000,
    volume: 15000,
    APY: "130%",
    rewards: 715000,
  },{id: 8,
    name: "USDC/SOL",
    liquidity: 810000,
    volume: 13000,
    APY: "110%",
    rewards: 712000,
  },{ id: 9,
    name: "USDC/MARCO",
    liquidity: 821000,
    volume: 11000,
    APY: "111%",
    rewards: 702000,
  },{ 
      id: 10,
    name: "USDC/SOL",
    liquidity: 820010,
    volume: 23000,
    APY: "113%",
    rewards: 704100,
  },
];
export type TokenPair = {
    id: Number,
    name: String,
    liquidity: Number,
    volume: Number,
    APY: String,
    rewards: Number
}
const useData = () => {
const [rows,setRows] = useState<TokenPair[]|null>(null)
const {choice} = useFilters()

    useEffect(() => {
        const randomNum = Math.floor((Math.random() * 10) + 1)

        setRows(sampleSize(data, randomNum))
    }, [])

    useEffect(() => {
        if (!!rows){
            const sortedRows = rows.sort((a,b) => {
                if (choice.key === "liquidity"){
                    if(a.liquidity > b.liquidity) {
                        return choice.value === "ASC" ? 1 : -1;
                    }

                    return a.liquidity < b.liquidity ? -1 : 1;
                }
                if(a.name > b.name) {
                    return choice.value === "ASC" ? 1 : -1;
                }

                return a.name < b.name ? -1 : 1;                
            })

            setRows(sortedRows)
        }
    }, [choice, rows])
    
    return rows;
}


export default useData;