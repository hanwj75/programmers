-- 코드를 입력하세요
SELECT  car_type CAR_TYPE,COUNT(1) as "CARS"
from CAR_RENTAL_COMPANY_CAR
where options LIKE ('%시트%')
group by 1
order by 1 asc