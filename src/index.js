import CMS from "netlify-cms-app";

import reportWebVitals from "./reportWebVitals";
import config from "./config";
import ListWidget from "./widget-list";
import IconWidget from "./widget-icon";

CMS.init({ config });
CMS.registerWidget(ListWidget.Widget());
CMS.registerWidget(IconWidget.Widget());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
