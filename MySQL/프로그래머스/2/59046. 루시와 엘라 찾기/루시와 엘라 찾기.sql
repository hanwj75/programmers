-- 코드를 입력하세요
SELECT ANIMAL_ID,NAME,IF( NOT SEX_UPON_INTAKE LIKE '%Intact%',SEX_UPON_INTAKE,'	Intact') 'SEX_UPON_INTAKE'
FROM ANIMAL_INS
WHERE NAME IN('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
GROUP BY 1