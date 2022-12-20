import React from "react";
import { ToDo } from "../../components/todo";

import "./index.css"

export function Board() {
    return (
        <div className="board-wrapper">
            <ToDo />
        </div>
    )
}