import { css } from "styled-components";

import importFont from "./utils/importFont";

export default css`
  ${importFont("Circular Std", "circular-std", "900", "normal")}
  ${importFont("Circular Std", "circular-std", "900-italic", "italic")}

  ${importFont("Circular Std", "circular-std", "700", "normal")}
  ${importFont("Circular Std", "circular-std", "700-italic", "italic")}

  ${importFont("Circular Std", "circular-std", "500", "normal")}
  ${importFont("Circular Std", "circular-std", "500-italic", "italic")}

  ${importFont("Circular Std", "circular-std", "400", "normal")}
  ${importFont("Circular Std", "circular-std", "400-italic", "italic")}
`;