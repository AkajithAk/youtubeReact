import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import GetApiCall from "../FetchApiCall/GetApiCall";
import Form from "../FormValidation/Form";
import Loading from "../Loading/Loading";

function RoutingReact() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form/>}/>
                    <Route path="/load" element={<Loading/>}/>
                    <Route path="/api" element={<GetApiCall/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RoutingReact;