UPDATE userz
SET image_url = $1
WHERE auth_id = $2;

SELECT image_url 
FROM userz
WHERE auth_id = $2;