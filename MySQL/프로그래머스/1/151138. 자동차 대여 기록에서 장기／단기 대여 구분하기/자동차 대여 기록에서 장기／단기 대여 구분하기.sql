SELECT HISTORY_ID , CAR_ID , SUBSTR(START_DATE,1,10) AS START_DATE , SUBSTR(END_DATE,1,10) AS END_DATE,
CASE WHEN DATEDIFF(END_DATE,START_DATE)+1 >=30 THEN "장기 대여"
     ELSE "단기 대여"
     END RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE START_DATE >='2022-09-01' AND START_DATE<'2022-10-01'
ORDER BY HISTORY_ID DESC