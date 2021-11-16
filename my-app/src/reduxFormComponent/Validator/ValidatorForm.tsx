import React from "react"

export const required = (values: any) => {
    if (values) return undefined
    return "Field is required"
}
export const maxCountOfSymbols = (max: number) => (value: any) => {
    if (value.length > max) return `Error! Max count of symbol is ${max}`
    return undefined
}
