import { themeColors } from './colors'

export const display=`
body {
  margin: 0;
  padding: 0;
  background-color: ${ themeColors.medDark };
  color: ${ themeColors.darkMuted };
}`

export const lightDisplay=`
body {
  margin: 0;
  padding: 0;
  background-color: #3E3E3E;
  color: #9D9D9D;
}`

export const text=`
body {
  font-size: 15pt;
  font-weight: 400;
  font-family: "Muli", sans-serif;
}
`
