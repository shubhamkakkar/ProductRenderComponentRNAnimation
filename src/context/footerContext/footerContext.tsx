import React from "react"

type AppContextInterface  = {
    footerComponent: React.ReactNode;
    footerBackgroundColor: {}
}

const {
    Provider: FooterPropProvider,
    Consumer: FooterPropConsumer
} = React.createContext<AppContextInterface | null>(null);


export {
    FooterPropConsumer,
    FooterPropProvider
}
