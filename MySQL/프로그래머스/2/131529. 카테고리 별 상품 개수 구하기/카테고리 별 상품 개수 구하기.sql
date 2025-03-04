-- 코드를 입력하세요
SELECT substr(product_code,1,2) 'CATEGORY',count(1) 'PRODUCTS'
from PRODUCT
group by 1
order by 1