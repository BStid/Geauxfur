SELECT * FROM USERZ 
WHERE id = (SELECT user_id from vehicle
WHERE active = true
ORDER BY RANDOM()
LIMIT 1);