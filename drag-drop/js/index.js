import { uiDrag } from "./uiDrag.js";
import { deckBuilder } from "./deckBuilder.js";
import { uiTabletop } from "./uiTabletop.js";


deckBuilder.spanishDeck();
deckBuilder.deckShuffle();
uiDrag.init(".drop-zone", ".card");