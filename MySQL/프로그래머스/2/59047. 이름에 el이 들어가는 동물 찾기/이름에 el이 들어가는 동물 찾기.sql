-- 코드를 입력하세요
SELECT animal_id,name
from animal_ins
where animal_type='dog' and name like ('%EL%')
order by 2