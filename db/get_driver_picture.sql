SELECT u.image_url 
FROM userz u
JOIN item i
	ON u.id = i.user_id_driver
WHERE i.user_id_driver = $1;