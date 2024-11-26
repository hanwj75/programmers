-- 코드를 입력하세요
SELECT ANIMAL_ID,NAME,substr(DATETIME,1,10) '날짜'
from ANIMAL_INS
group by 1