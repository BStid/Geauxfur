SELECT i.name, i.address, i.time_sent, i.time_recieved, i.user_id_driver, i.user_id_sender, u.first_name, u.last_name, u.image_url
FROM userz u
	JOIN item i
		ON u.id = i.user_id_driver 
		OR u.id = i.user_id_sender
	WHERE u.id = $1;