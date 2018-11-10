SELECT * FROM 
(SELECT * FROM item
WHERE active = true
ORDER BY RANDOM()
LIMIT 3) AS items
JOIN userz ON items.user_id_sender = userz.id;