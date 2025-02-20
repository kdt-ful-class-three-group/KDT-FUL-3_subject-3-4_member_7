//* 서버를 제작하기 위해 HTTP 모듈을 import 해주었다.
import http from "http";

//* 서버 동작 시 사용되는 포트 번호를 지정해주기 위해 선언
const port = 8000;

//* 서버 생성
const server = http.createServer(function(req, res) {
  if(req.method === "GET") {
    console.log("in GET");
    if(req.url === "/") {
      console.log("접속 : 홈");
    } else if (req.url === "/pageDetail") {
      console.log("접속 : 글 상세");
    }
  }
})

//* 서버 실행
server.listen(port, () => {
  console.log(`서버 동작 중입니다. http://localhost:${port}`);
})