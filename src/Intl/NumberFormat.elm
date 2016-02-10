module  Intl.NumberFormat (format, formatList) where

{-| Elm native access to Intl.NumberFormat

# Functions
@docs format, formatList
-}

import Native.Intl.NumberFormat

{-| Convert a float to a string. -}
format : Float -> String
format = Native.Intl.NumberFormat.format

{-| Convert a list of floats to a list of strings. -}
formatList : List Float -> List String
formatList = Native.Intl.NumberFormat.format
