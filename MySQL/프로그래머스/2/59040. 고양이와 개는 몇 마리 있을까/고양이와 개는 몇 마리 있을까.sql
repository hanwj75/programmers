SELECT ANIMAL_TYPE,count(1)
from ANIMAL_INS
where ANIMAL_TYPE IN ('Cat','Dog')
group by 1
order by 1 = 'cat' desc , 1