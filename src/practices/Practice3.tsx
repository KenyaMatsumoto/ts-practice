export const Practice3 = () => {
  // 間違い防止のために戻り値の型を返却しておくのありよりのあり
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題: 返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
