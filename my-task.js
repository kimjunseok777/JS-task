// 멜론 차트 TOP 10

const melonChart = [
    {
        top: 1, song: "Magnetic", artist: "아일릿"
    },
    {
        top: 2, song: "나는 아픈 건 딱 질색이니까", artist: "여자아이들"
    },
    {
        top: 3, song: "첫 만남은 계획대로 되지 않아", artist: "투어스"
    },
    {
        top: 4, song: "밤양갱", artist: "비비"
    },
    {
        top: 5, song: "Love wins all", artist: "아이유"
    },
    {
        top: 6, song: "EASY", artist: "르세라핌"
    },
    {
        top: 7, song: "천상연", artist: "이창섭"
    },
    {
        top: 8, song: "Smart", artist: "르세라핌"
    },
    {
        top: 9, song: "비의 랩소디", artist: "임재현"
    },
    {
        top: 10, song: "To.X", artist: "태연"
    }
]

let index = 0;

function next() {
    if(index >= melonChart.length) return;
    index++
}
function prev() {
    if(index <= 0) return;
    index--
}
next()
next()
next()
console.log(melonChart[index]) //--> 비비의 밤양갱