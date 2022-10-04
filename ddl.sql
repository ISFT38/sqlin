CREATE USER sqlin_user WITH PASSWORD 'secret';
CREATE DATABASE sqlin_database OWNER sqlin_user;
\connect sqlin_database sqlin_user localhost 5432

CREATE TABLE user_data (
  user_id   SERIAL PRIMARY KEY,
  uname     VARCHAR(100),
  email     VARCHAR(100),
  upassword VARCHAR(100)
);

GRANT ALL ON user_data TO sqlin_user ;
GRANT ALL ON user_data_user_id_seq TO sqlin_user;
