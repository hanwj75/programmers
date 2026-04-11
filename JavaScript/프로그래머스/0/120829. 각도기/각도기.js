function solution(angle) {
  return angle >=0&& angle<90 ? 1:angle>90&& angle<180 ? 3:angle === 180 ? 4:angle===90 ? 2:null
}