-- 코드를 입력하세요
SELECT CATEGORY,SUM(SALES) TOTAL_SALES
FROM BOOK B LEFT JOIN BOOK_SALES S ON B.book_id = S.book_id
WHERE SALES_DATE LIKE '%2022-01%'
GROUP BY 1
ORDER BY 1 ASC