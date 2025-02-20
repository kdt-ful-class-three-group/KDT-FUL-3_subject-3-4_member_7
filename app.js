//* 서버를 제작하기 위해 HTTP 모듈을 import 해주었다.
import http from "http";
//* 파일관련 처리를 위해 fs 모듈을 import 해주었다.
import fs from "fs";
import { createObject } from "./src/function/createObject.js";

//* 서버 동작 시 사용되는 포트 번호를 지정해주기 위해 선언
const port = 8000;

//* 서버 생성
const server = http.createServer(function(req, res) {
  console.log(req.url);
  if(req.method === "GET") {
    console.log("in GET");
    if(req.url.endsWith(".js")) {
      console.log("끝이 js");
      const javascript = fs.readFileSync(`./${req.url}`);
      res.writeHead(200, {"Content-Type" : "application/javascript"});
      res.write(javascript);
      res.end();
    } else if (req.url.endsWith(".css")) {
      console.log("끝이 CSS");
      const css = fs.readFileSync(`./${req.url}`);
      res.writeHead(200, {"Content-Type" : "text/css"});
      res.write(css);
      res.end();
    } else if(req.url === "/") {
      const page = fs.readFileSync('./public/index.html');
      res.write(page);
      res.end();
      console.log("접속 : 홈");
    } else if (req.url === "/pageDetail") {
      console.log("접속 : 글 상세");
    } else if (req.url === "/pageWrite") {
      const page = fs.readFileSync('./public/pageWrite.html');
      res.write(page);
      res.end();
    } else {
      const page = fs.readFileSync('./public/error404.html');
      res.write(page);
      res.end();
    }
  } else if (req.method === "POST") {
    console.log("in POST");
    if(req.url === "/pageWrite") {
      console.log("접속 : 글 작성");
      req.on('data', (data) => {
        console.log("받아온 데이터 : ", data);
        const object = createObject(data);
        console.log("받아온 데이터 처리 : ", object);
      })
    }
  }
})

//* 서버 실행
server.listen(port, () => {
  console.log(`서버 동작 중입니다. http://localhost:${port}`);
})