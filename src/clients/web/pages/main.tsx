import React from "react";
import ReactDOM from "react-dom/client";
import MySuperComponent from "../../../components/MySuperComponent";
import { Text } from 'react-native'

const searchParams = new URLSearchParams(document.location.search)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MySuperComponent />
        <Text>{searchParams.get('id')}</Text>
    </React.StrictMode>
);
// ReactDOM.render(
//     <React.StrictMode>
//         <MySuperComponent />
//     </React.StrictMode>,
//     document.getElementById("root"),
// );