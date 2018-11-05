SELECT userz_2.id, userz_2.name, userz_2.address, userz_2.time_sent, userz_2.category, userz_2.time_recieved, userz_2.user_id_driver, userz_2.user_id_sender, userz_2.first_name, userz_2.last_name, userz_2.image_url, userz.first_name as driver_name FROM
(SELECT i.id, i.name, i.address, i.time_sent, i.category, i.time_recieved, i.user_id_driver, i.user_id_sender, u.first_name, u.last_name, u.image_url
FROM userz AS u
	 JOIN item i
		ON u.id = i.user_id_driver 
		OR u.id = i.user_id_sender
		WHERE u.id = $1) AS userz_2
JOIN userz on userz_2.user_id_driver = userz.id