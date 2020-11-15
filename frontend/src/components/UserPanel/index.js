import React from "react";
import "./styles.css";

export default class UserPanel extends React.Component {
  render() {
    return (
      <div className="user-panel">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGhlaWdodD0iMTI4IiBpZD0iTWVudSIgc3R5bGU9ImZpbGw6bm9uZTsiIHdpZHRoPSIxMjgiIHg9IjAuMzY5IiB5PSIwLjIxIi8+PHBhdGggZD0iTTEwNC4zNjksOTVsLTgwLDBjLTIuMTA1LC0wLjEzMiAtMy4wMDQsLTMuODExIDAsLTRsODAsMGMwLjA4MywwLjAwNSAwLjE2NywwLjAxMSAwLjI1LDAuMDE2YzEuOTUyLDAuMzcyIDIuNjc0LDMuOCAtMC4yNSwzLjk4NFptMCwtMjAuMjYzbC04MCwwYy0yLjA0OSwtMC4xMjkgLTMuMDg3LC0zLjgwNiAwLC00bDgwLDBjMC4wODMsMC4wMDUgMC4xNjcsMC4wMSAwLjI1LDAuMDE1YzEuOTUyLDAuMzczIDIuNjc0LDMuODAxIC0wLjI1LDMuOTg1Wm0wLC0yMC4yNjRsLTgwLDBjLTIuMDc5LC0wLjEzIC0zLjAwNCwtMy44MTEgMCwtNGw4MCwwYzAuMDgzLDAuMDA2IDAuMTY3LDAuMDExIDAuMjUsMC4wMTZjMS45NzcsMC4zNzcgMi41OTksMy44MDUgLTAuMjUsMy45ODRabTAsLTIwLjI2M2wtODAsMGMtMS43MjgsLTAuMTA5IC0xLjgwNSwtMC43ODkgLTEuOTY1LC0xLjYyNWMtMC4yMiwtMS4xNTUgMC43MzYsLTIuMjk4IDEuOTY1LC0yLjM3NWw4MCwwYzAuMDgzLDAuMDA1IDAuMTY3LDAuMDExIDAuMjUsMC4wMTZjMS43MDEsMC4zMjQgMS42OTIsMS4wMDggMS43NDYsMS44NThjMC4wNjgsMS4wODQgLTAuODUyLDIuMDU0IC0xLjk5NiwyLjEyNloiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz48L3N2Zz4="
          alt="burger"
          width="46"
          height="46"
        ></img>
      </div>
    );
  }
}
