import { createGlobalStyle } from 'styled-components'

export const themes = createGlobalStyle`
  :root {
    --background: #121214; 
    --details: #8257E5; /* purple */ 
    --bar: #202024;  /* header and login placeholders */
    --subtitle: #8E8E8E; /* messages and placeholder text */
    --title: #FFFFFF; /* titles and names */
  }
`