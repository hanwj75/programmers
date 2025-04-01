-- 코드를 입력하세요
SELECT book_id,DATE_FORMAT(published_date,'%Y-%m-%d') published_date
FROM BOOK
WHERE CATEGORY='인문' AND published_date LIKE "2021%"
ORDER BY 2