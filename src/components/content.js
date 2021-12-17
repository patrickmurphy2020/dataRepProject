import React from "react";
import { Create } from "./create";

export class Content extends React.Component{
    render(){
        return(
            <div>
                <h1>This an app where you can keep track of any games you like</h1>
                <ul>
                    <li>On the top of the screen youll see a navigation bar</li>
                    <li>If you click on home it will bring you back to this page</li>
                    <li>Next to that you have the option to see the list of the games on your list</li>
                    <li>The final one allows you to add games to your list</li>
                </ul>
            </div>
        )
    }
}