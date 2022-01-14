const PolicyBox = ({ noticeNum, setNoticeNum }) => {
  const policyArray = [
    "상품정보",
    "주문 및 배송 안내",
    "교환 및 환불 안내",
    "품질보증기준",
  ];

  return (
    <div className="policyNotice">
      <div className="policyBox">
        {policyArray.map((e, i) => {
          return (
            <PolicyItems
              key={i}
              num={i + 1}
              noticeNum={noticeNum}
              setNoticeNum={setNoticeNum}
              info={e}
            />
          );
        })}
      </div>
      <div className="imgInfo">
        <SelectNotice num={noticeNum} />
      </div>
    </div>
  );
};

const SelectNotice = ({ num }) => {
  switch (num) {
    case 1:
      return <img src="/images/selectNotice/info.png" alt="info" />;
    case 2:
      return <img src="/images/selectNotice/delivery.png" alt="delivery" />;
    case 3:
      return <img src="/images/selectNotice/change.png" alt="change" />;
    case 4:
      return <img src="/images/selectNotice/quality.png" alt="quality" />;
    default:
      return <img src="/images/selectNotice/info.png" alt="info" />;
  }
};

const PolicyItems = ({ num, noticeNum, setNoticeNum, info }) => {
  return (
    <span
      className={noticeNum === num ? "on" : undefined}
      onClick={() => {
        setNoticeNum(num);
      }}
    >
      {info}
    </span>
  );
};
export { PolicyBox };
