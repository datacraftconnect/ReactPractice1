import React from "react";
import { getImageUrl } from "../../utils";

export const Testbar = () => {
// Get the full path of the image
const imagePath = getImageUrl("nav/menuIcon.png");

// Print the output of getImageUrl function
console.log("Output of getImageUrl:", imagePath);

return (
    <div>
        <h1>Hello World</h1>

    </div>
);
}