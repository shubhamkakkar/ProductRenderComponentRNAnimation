import React from "react"


type AppContextInterface = {
    headerLeft: React.ReactNode,
    headerRight: React.ReactNode,
    headerWrapperStyle : {},
    widthOfRightHeader: string,
    heightOfRightHeader: number,
}

const {
    Provider : HeaderPropProvider,
    Consumer :  HeaderPropConsumer
} = React.createContext<AppContextInterface | null>(null);



export {
    HeaderPropConsumer,
    HeaderPropProvider
}
