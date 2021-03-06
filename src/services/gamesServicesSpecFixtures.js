    
import { newCardDeck } from "./gameServices"
import {colors} from "./gameConstants"
    
let fixtures = {}
fixtures.deck = newCardDeck() 
fixtures.oneColor1= 
{
    id: `1|${colors[0]}|circle|solid`,
    number: [1],
    color: colors[0],
    shape: "circle",
    fill: "solid"
}
fixtures.oneColor2 =
{
    id: `1|${colors[1]}|circle|solid`,
    number: [1],
    color: colors[1],
    shape: "circle",
    fill: "solid"
}
fixtures.oneColor3 =
{
    id: `1|${colors[2]}|circle|solid`,
    number: [1],
    color: colors[2],
    shape: "circle",
    fill: "solid"
}
fixtures.twoColor1 = 
{
    id: `2|${colors[0]}|circle|solid`,
    number: [1,2],
    color: colors[0],
    shape: "circle",
    fill: "solid"
}
fixtures.twoColor2 =
{
    id: `2|${colors[1]}|circle|solid`,
    number: [1,2],
    color: colors[1],
    shape: "circle",
    fill: "solid"
}
fixtures.twoColor3 =
{
    id: `2|${colors[2]}|circle|solid`,
    number: [1,2],
    color: colors[2],
    shape: "circle",
    fill: "solid"
}
fixtures.threeColor1 = 
{
    id: `3|${colors[0]}|circle|solid`,
    number: [1,2,3],
    color: colors[0],
    shape: "circle",
    fill: "solid"
}
fixtures.threeColor2 =
{
    id: `3|${colors[1]}|circle|solid`,
    number: [1,2,3],
    color: colors[1],
    shape: "circle",
    fill: "solid"
}
fixtures.oneCircle =
{
    id: `1|${colors[1]}|circle|solid`,
    number: [1],
    color: colors[1],
    shape: "circle",
    fill: "solid"
}
fixtures.twoCircle =
{
    id: `2|${colors[1]}|circle|solid`,
    number: [1,2],
    color: colors[1],
    shape: "circle",
    fill: "solid"
}
fixtures.oneSquare =
{
    id: `1|${colors[1]}|square|solid`,
    number: [1],
    color: colors[1],
    shape: "square",
    fill: "solid"
}
fixtures.twoSquare =
{
    id: `2|${colors[1]}|square|solid`,
    number: [1,2],
    color: colors[1],
    shape: "square",
    fill: "solid"
}
fixtures.oneOval =
{
    id: `1|${colors[1]}|oval|solid`,
    number: [1],
    color: colors[1],
    shape: "oval",
    fill: "solid"
}
fixtures.twoOval =
{
    id: `2|${colors[1]}|oval|solid`,
    number: [1,2],
    color: colors[1],
    shape: "oval",
    fill: "solid"
}
fixtures.oneSolid =
{
    id: `1|${colors[1]}|circle|solid`,
    number: [1],
    color: colors[1],
    shape: "circle",
    fill: "solid"
}
fixtures.twoSolid =
{
    id: `2|${colors[1]}|circle|solid`,
    number: [1,2],
    color: colors[1],
    shape: "circle",
    fill: "solid"
}
fixtures.oneEmpty =
{
    id: `1|${colors[1]}|square|empty`,
    number: [1],
    color: colors[1],
    shape: "square",
    fill: "empty"
}
fixtures.twoEmpty =
{
    id: `2|${colors[1]}|square|empty`,
    number: [1,2],
    color: colors[1],
    shape: "square",
    fill: "empty"
}
fixtures.oneFill =
{
    id: `1|${colors[1]}|oval|fill`,
    number: [1],
    color: colors[1],
    shape: "oval",
    fill: "fill"
}
fixtures.twoFill =
{
    id: `2|${colors[1]}|oval|fill`,
    number: [1,2],
    color: colors[1],
    shape: "oval",
    fill: "fill"
}
// circles
fixtures.oneColor1CircleSolid = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|circle|solid`)
fixtures.oneColor1CircleEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|circle|empty`)
fixtures.oneColor1CircleFill = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|circle|fill`)
fixtures.oneColor2CircleSolid = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|circle|solid`)
fixtures.oneColor2CircleEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|circle|empty`)
fixtures.oneColor2CircleFill = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|circle|fill`)
fixtures.oneColor3CircleSolid = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|circle|solid`)
fixtures.oneColor3CircleEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|circle|empty`)
fixtures.oneColor3CircleFill = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|circle|fill`)
fixtures.twoColor1CircleSolid = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|circle|solid`)
fixtures.twoColor1CircleEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|circle|empty`)
fixtures.twoColor1CircleFill = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|circle|fill`)
fixtures.twoColor2CircleSolid = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|circle|solid`)
fixtures.twoColor2CircleEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|circle|empty`)
fixtures.twoColor2CircleFill = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|circle|fill`)
fixtures.twoColor3CircleSolid = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|circle|solid`)
fixtures.twoColor3CircleEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|circle|empty`)
fixtures.twoColor3CircleFill = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|circle|fill`)
fixtures.threeColor1CircleSolid = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|circle|solid`)
fixtures.threeColor1CircleEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|circle|empty`)
fixtures.threeColor1CircleFill = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|circle|fill`)
fixtures.threeColor2CircleSolid = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|circle|solid`)
fixtures.threeColor2CircleEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|circle|empty`)
fixtures.threeColor2CircleFill = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|circle|fill`)
fixtures.threeColor3CircleSolid = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|circle|solid`)
fixtures.threeColor3CircleEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|circle|empty`)
fixtures.threeColor3CircleFill = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|circle|fill`)
// squares
fixtures.oneColor1SquareSolid = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|square|solid`)
fixtures.oneColor1SquareEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|square|empty`)
fixtures.oneColor1SquareFill = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|square|fill`)
fixtures.oneColor2SquareSolid = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|square|solid`)
fixtures.oneColor2SquareEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|square|empty`)
fixtures.oneColor2SquareFill = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|square|fill`)
fixtures.oneColor3SquareSolid = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|square|solid`)
fixtures.oneColor3SquareEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|square|empty`)
fixtures.oneColor3SquareFill = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|square|fill`)
fixtures.twoColor1SquareSolid = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|square|solid`)
fixtures.twoColor1SquareEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|square|empty`)
fixtures.twoColor1SquareFill = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|square|fill`)
fixtures.twoColor2SquareSolid = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|square|solid`)
fixtures.twoColor2SquareEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|square|empty`)
fixtures.twoColor2SquareFill = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|square|fill`)
fixtures.twoColor3SquareSolid = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|square|solid`)
fixtures.twoColor3SquareEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|square|empty`)
fixtures.twoColor3SquareFill = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|square|fill`)
fixtures.threeColor1SquareSolid = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|square|solid`)
fixtures.threeColor1SquareEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|square|empty`)
fixtures.threeColor1SquareFill = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|square|fill`)
fixtures.threeColor2SquareSolid = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|square|solid`)
fixtures.threeColor2SquareEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|square|empty`)
fixtures.threeColor2SquareFill = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|square|fill`)
fixtures.threeColor3SquareSolid = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|square|solid`)
fixtures.threeColor3SquareEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|square|empty`)
fixtures.threeColor3SquareFill = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|square|fill`)
// ovals
fixtures.oneColor1OvalSolid = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|oval|solid`)
fixtures.oneColor1OvalEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|oval|empty`)
fixtures.oneColor1OvalFill = 
fixtures.deck.find(card => card.id === `1|${colors[0]}|oval|fill`)
fixtures.oneColor2OvalSolid = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|oval|solid`)
fixtures.oneColor2OvalEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|oval|empty`)
fixtures.oneColor2OvalFill = 
fixtures.deck.find(card => card.id === `1|${colors[1]}|oval|fill`)
fixtures.oneColor3OvalSolid = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|oval|solid`)
fixtures.oneColor3OvalEmpty = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|oval|empty`)
fixtures.oneColor3OvalFill = 
fixtures.deck.find(card => card.id === `1|${colors[2]}|oval|fill`)
fixtures.twoColor1OvalSolid = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|oval|solid`)
fixtures.twoColor1OvalEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|oval|empty`)
fixtures.twoColor1OvalFill = 
fixtures.deck.find(card => card.id === `2|${colors[0]}|oval|fill`)
fixtures.twoColor2OvalSolid = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|oval|solid`)
fixtures.twoColor2OvalEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|oval|empty`)
fixtures.twoColor2OvalFill = 
fixtures.deck.find(card => card.id === `2|${colors[1]}|oval|fill`)
fixtures.twoColor3OvalSolid = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|oval|solid`)
fixtures.twoColor3OvalEmpty = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|oval|empty`)
fixtures.twoColor3OvalFill = 
fixtures.deck.find(card => card.id === `2|${colors[2]}|oval|fill`)
fixtures.threeColor1OvalSolid = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|oval|solid`)
fixtures.threeColor1OvalEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|oval|empty`)
fixtures.threeColor1OvalFill = 
fixtures.deck.find(card => card.id === `3|${colors[0]}|oval|fill`)
fixtures.threeColor2OvalSolid = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|oval|solid`)
fixtures.threeColor2OvalEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|oval|empty`)
fixtures.threeColor2OvalFill = 
fixtures.deck.find(card => card.id === `3|${colors[1]}|oval|fill`)
fixtures.threeColor3OvalSolid = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|oval|solid`)
fixtures.threeColor3OvalEmpty = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|oval|empty`)
fixtures.threeColor3OvalFill = 
fixtures.deck.find(card => card.id === `3|${colors[2]}|oval|fill`)

export default fixtures