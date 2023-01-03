import { burger } from "./scripts/mainPageScripts/burger";
import { headerNavigation } from "./scripts/headerNav/headerNavigation";
import { initMap } from "./scripts/mainPageScripts/map";
import { slider } from "./scripts/mainPageScripts/slider";
import { mainJoinButton } from "./scripts/joinPopUP/mainJoinButton";

headerNavigation();
burger();
slider();
mainJoinButton();
window.initMap = initMap;
