INSERT INTO userz (auth_id) VALUES ($1);
SELECT * FROM userz WHERE auth_id = $1;