# 프로젝트 구조 설명
- css/
    - style.css
- js/
    - detail.js
	- index.js
	- modify.js
- public/
	- error404.html
	- index.html
	- pageDetail.html
	- pageModify.html
	- pageWrite.html
- src/
	- const/
		- pageWriteData.js
	- function/
		- createJSON.js
		- createOneJsonFile.js
		- dataToJsonParse.js
		- dataToJsonStringify.js
		- deleteDataInListJson.js
		- fileDataToObject.js
		- findLastOrder.js
		- findObjectAtDataJSON.js
		- getOrder.js
		- modifyDataToObject.js
		- orderSplit.js
		- querystringToObject.js
		- readDataFile.js
		- updateListJson.js
		- userDataToObject.js
- app.js
- data.JSON
- list.JSON
- package.json
- readme.md

# 실행 방법
## 1. 홈 화면 확인하기
1-1. 서버를 구동한다. </br>
1-2. http://localhost:8000 해당 URL로 접속한다. </br>
1-3. url주소에 /errorTest를 입력하고 404에러가 나타나는지 확인한다. </br>

## 2. 글 작성하기
2-1. 홈 화면에 글 작성 버튼을 누른다. </br>
2-2. 작성 완료 버튼을 눌러 유효성을 체크한다. </br>
2-3. 제목과 내용을 입력한다. </br>
2-4. 작성 완료 버튼을 눌러 홈 화면으로 이동하는지 확인한다. </br>
2-5. 작성한 제목의 글이 생겼는지 확인한다. </br>
2-6. 작성한 시간이 제대로 출력되는지 확인한다. </br>

## 3. 상세 페이지 확인하기 (2번이 완료된 후 진행)
3-1. 홈 화면에서 작성한 제목을 클릭한다. </br>
3-2. 작성한 제목과 일치하는지 확인한다. </br>
3-3. 작성한 내용과 일치하는지 확인한다. </br>
3-4. 뒤로가기 버튼을 눌러 홈 화면으로 이동하는지 확인한다. </br>

## 4. 수정 페이지 확인하기 (2번이 완료된 후 진행)
4-1. 홈 화면에서 작성한 제목을 클릭한다. </br>
4-2. 수정 버튼을 누른다. </br>
4-3. 작성한 제목 뒤에 "수정되었습니다." 추가한다. </br>
4-4. 작성 완료 버튼을 누른다. </br>
4-5. 홈 화면에서 제목이 수정 되었는지 확인한다. </br>
4-6. 홈 화면에서 수정한 날짜로 변경 되었는지 확인한다. </br>

## 5. 삭제 페이지 확인하기 (2번이 완료된 후 진행)
5-1. 홈 화면에서 작성한 제목을 클릭한다. </br>
5-2. 삭제 버튼을 누른다. </br>
5-3. 홈 화면에서 작성한 내용이 삭제 되었는지 확인한다. </br>

# 구현 기능 목록
## 홈 화면
### list.JSON파일을 읽어와서 홈 화면에 제목과 날짜로 데이터를 표시한다.
## 글 상세
### order 번호를 기준으로 list.JSON파일에서 데이터를 찾아 data.JSON으로 만들고 이를 화면에 표시한다.
## 글 작성
### 제목과 내용을 입력하여 작성을 완료할 경우 JSON파일로 저장을 한다.
## 글 수정
### order 번호를 기준으로 list.JSON파일에서 데이터를 찾아 해당 데이터를 수정한다.
## 글 삭제
### order 반호를 기준으로 list.JSON파일에서 데이터를 찾아 해당 데이터를 삭제한다.

# 학습 내용 정리
1. 파일을 나누어 관리하였다. </br>
2. 변수및 파일명을 나름의 규칙으로 생성했다. </br>
3. 함수에는 되도록 하나의 기능이 있게 만들었다. </br>
4. fetch메서드를 이용하여 화면에 표시하였다. </br>

# 개선할 점
1. 파일을 보다 알기 쉽게 보기 쉽게 나누어야 겠다. </br>
2. 생성 규칙을 따로 정의해서 적어놓든 해야겠다. 매번 작성을 할 때마다 헷갈리거나 대소문자를 구분하지 않기도 했다. JSON을 Json이라고 했다거나 </br>
3. 함수 안에 하나의 기능만을 넣어야 겠다. 현재도 되도록 하나의 기능만을 넣었지만 아직 모든 함수가 하나의 기능을 가지진 않는다. </br>
4. 배열에 반복이 필여하다면 되도록 먼저 배열함수를 생각해보자. 동일한 기능에 forEach를 사용한 경우도 있고 filter를 사용한 경우도 있다. </br>