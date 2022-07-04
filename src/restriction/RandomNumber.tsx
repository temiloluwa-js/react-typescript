import React from 'react'

type PositiveNumberType = RandomNumberProps & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumberType = RandomNumberProps & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type ZeroNumberType = RandomNumberProps & {
    isNegative?: never
    isPositive?: never
    isZero: boolean
}


type RandomNumberProps = {
    value: number;
    isPositive?: boolean;
    isNegative?: boolean;
    isZero?: boolean
}

type RandomNumberType = PositiveNumberType | NegativeNumberType | ZeroNumberType
export const RandomNumber = ({value, isNegative, isPositive, isZero}: RandomNumberType) => {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'} {'   '}{isZero && 'zero'}
    </div>
  )
}
