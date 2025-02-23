import fs from "fs";
import { dataToJsonStringify } from "./dataToJsonStringify.js";
import { fileDataToObject } from "./fileDataToObject.js";

function deleteDataInListJson(order) {
    //* list.JSON 객체를 가지고 온다.
    const dataObj = fileDataToObject();
    //* 객체에서 지정한 번호와 일치하지 않는 데이터만 가지고 온다.
    const deletedData = dataObj.filter(data => data.order != order);
    //* 가지고 온 데이터를 파일로 만들기 위해 Json문자열로 만든다.
    const dataJson = dataToJsonStringify(deletedData);
    //* Json문자열로 list.JSON파일을 만든다.
    fs.writeFileSync("list.JSON", dataJson);
}

export { deleteDataInListJson }