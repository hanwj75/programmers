-- 코드를 입력하세요
select FOOD_TYPE,REST_ID,REST_NAME,mxFA
from
(
SELECT REST_ID,food_type,REST_NAME,max(FAVORITES) as mxFA,rank() over (partition by FOOD_TYPE order by FAVORITES desc) as RK
from REST_INFO
group by 1
) FA_RK
where RK = 1
group by 1
order by 1 desc