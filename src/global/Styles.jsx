import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        * {
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            font-family: 'Poppins', sans-serif;
            padding: 0;
            margin: 0;
        }
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
`;
export default GlobalStyle;
