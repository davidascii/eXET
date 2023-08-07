import React from "react";
import {createRoot} from "react-dom/client";
import MySuperComponent from "../../../components/MySuperComponent";
import App from "../../../components/App";

const searchParams = new URLSearchParams(document.location.search)

const idParameter = searchParams.get('id')

const contentElement = document.getElementById('root') as HTMLElement

const root = createRoot(contentElement)

// root.render(<MySuperComponent title={idParameter ? idParameter : ''}/>)
root.render(<App title={'Testing...'}/>)
// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <MySuperComponent></MySuperComponent>
// );

// ReactDOM.render(
//     <React.StrictMode>
//         <MySuperComponent />
//     </React.StrictMode>,
//     document.getElementById("root"),
// );
