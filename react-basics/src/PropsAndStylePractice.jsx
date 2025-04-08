import kittyImg from "./assets/kitty.jpg";

// JSX 속성
const disableInput = true;

// 이미지 'src' 속성
const kittyImgAlt = "kitty!";
console.log(kittyImg);

// css 스타일 정보 분리하기
const divStyle = {
  backgroundColor: "lightblue",
  margin: "12px",
  padding: "20px",
  borderRadius: "8px",
};

// 동적으로 스타일링 적용하기
const styleA = {
  border: "5px solid pink",
  margin: "12px",
  padding: "20px",
  borderRadius: "8px",
};

const styleB = {
  border: "5px solid lightblue",
  margin: "12px",
  padding: "20px",
  borderRadius: "8px",
  textDecoration: "underline",
};

const isPrimary = false;

function PropsAndStylePractice() {
  return (
    <>
      {/* <h4>JSX 속성</h4>
      <label
        htmlFor="username" //for
      >
        Username:
      </label>
      <input
        type="text"
        id="username"
        // 잘못 적어도 오류코드에서 정확한 이름을 알려줌
        className="input-field" // class
        autoComplete="off" // autocomplete
        //속성들의 값에도 중괄호 표현식이 사용될 수 있다.
        maxLength={20} //maxlength
        spellCheck={true} //spellcheck
        readOnly={true} //readonly
        tabIndex={0} //tabindex
        //따라서 자바스크립트 표현식 모두 사용 가능함
        disabled={disableInput}
        placeholder={disableInput ? "(DISABLED)" : "Enter your name"}
      /> */}

      {/* <h4>이미지 'src' 속성</h4>
      <img src={kittyImg} alt={kittyImgAlt} width={256} height={228} /> */}

      <h4>CSS 스타일 적용하기</h4>
      <span style={{ fontWeight: "bold", color: "pink" }}>
        1. 인라인 스타일링
      </span>
      <div style={divStyle}>2. 스타일 정보 분리하기</div>
      <div
        style={{
          ...divStyle,
          backgroundColor: "pink",
          fontWeight: "bold",
        }}
      >
        3. 객체 스프레딩
      </div>
      <div style={isPrimary ? styleA : styleB}>
        <span style={{ fontSize: isPrimary ? "1.5rem" : "1rem" }}>
          4. 동적으로 스타일링 적용하기
        </span>
      </div>
    </>
  );
}

export default PropsAndStylePractice;
