// Phone '___-___-____'

const formatPatternByString = (item, patternInPut) => {
  // ลบข้อมูลที่ไม่ใช่ตัวเลข
  let formatpatternNotLine = item.replace(/[^\d]/g, "");

  // สร้างรูปแบบแบ่งตามที่กำหนด
  let pattern = patternInPut;
  let result = "";
  let idx = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern.charAt(i) === "-") {
      result += "-";
    } else if (pattern.charAt(i) === "/") {
      result += "/";
    } else {
      if (idx < formatpatternNotLine.length) {
        result += formatpatternNotLine.charAt(idx);
        idx++;
      } else {
        // หากเกินความยาวที่กำหนดในรูปแบบ ให้หยุดการตัดอักษร
        break;
      }
    }
  }
  return result;
};
export default formatPatternByString;
