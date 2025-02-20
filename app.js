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
    //* 각 참조한 javascript파일을 가지고 온다.
    if(req.url.endsWith(".js")) {
      console.log("끝이 js");
      const javascript = fs.readFileSync(`./${req.url}`);
      res.writeHead(200, {"Content-Type" : "application/javascript"});
      res.write(javascript);
      res.end();
    //* 각 참조한 CSS파일을 가지고 온다.
    } else if (req.url.endsWith(".css")) {
      console.log("끝이 CSS");
      const css = fs.readFileSync(`./${req.url}`);
      res.writeHead(200, {"Content-Type" : "text/css"});
      res.write(css);
      res.end();
    //* 경로가 / 일 경우 홈 화면을 표시해준다.
    } else if(req.url === "/") {
      const page = fs.readFileSync('./public/index.html');
      res.write(page);
      res.end();
      console.log("접속 : 홈");
    //* 경로가 /pageDetail 일 경우 상세 페이지를 표시해준다.
    } else if (req.url === "/pageDetail") {
      console.log("접속 : 글 상세");
      const page = fs.readFileSync('./public/pageDetail.html');
      res.write(page);
      res.end();
    //* 경로가 /pageWrite 일 경우 글을 작성하는 페이지를 표시해준다.
    //! 해당 경로는 글의 작성이 완료된 경로가 아닌 페이지 접속 경로이다.
    } else if (req.url === "/pageWrite") {
      const page = fs.readFileSync('./public/pageWrite.html');
      res.write(page);
      res.end();
    //* 이외의 경로는 파일이 존재하지 않기 때문에 404 에러를 표시해준다.
    } else {
      const page = fs.readFileSync('./public/error404.html');
      res.write(page);
      res.end();
    }
  } else if (req.method === "POST") {
    console.log("in POST");
    //* 경로가 /pageWrite 일 경우 글 작성이 완료 되었기에 작성한 제목, 내용의 데이터를 처리해준다.
    //! 해당 경로는 글의 작성이 완료된 경로이기 때문에 데이터를 처리해준다.
    if(req.url === "/pageWrite") {
      console.log("접속 : 글 작성");
      req.on('data', (data) => {
        //todo 사용자가 입력한 데이터를 가지고 JSON파일을 만들 예정
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