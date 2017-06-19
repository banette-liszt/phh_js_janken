window.addEventListener('load', function(){
    let playerHand;
    let Rock = document.getElementById('Rock');
    let Scissor = document.getElementById('Scissor');
    let Paper = document.getElementById('Paper');
    let robbotHandField = document.getElementById('robot_hand');  
    let result = document.getElementById('result');

    function janken(hand) {
        let hands = ['Rock','Scissor','Paper'];
        robbotHand = hands[Math.floor(Math.random() * length)];
        robbotHandField.innerHTML = '相手の手は' + robbotHand
        result.innerHTML = judge(hand,robbotHand)

    //robbotHandの手を決めましょう、乱数を使えば決まるよ＾＾
    //勝敗判定の処理を書いてみましょう、別に関数にしたほうがいいかも＾＾
    //勝敗判定とロボットの手をHTMLに書き込みましょう＾＾
    }

    function judge(myHand,robbotHand) {
        if (myHand === robbotHand) {
            return 'あいこ'
        }else if(
            (myHand === 'Rock' && robbotHand === 'Scissor') ||
            (myHand === 'Scissor' && robbotHand === 'Paper')  ||
            (myHand === 'Paper' && robbotHand === 'Rock')){
            return 'あなたの勝ち＾＾'
            } else {
                return 'あなたの負け＾＾'
            }

    }

    Rock.addEventListener('click',function() {
        console.log('load')
        janken('Rock');
    });

    Scissor.addEventListener('click',function() {
        janken('Scissor');
    });

    Paper.addEventListener('click',function() {
        janken('Paper');
    });

});
