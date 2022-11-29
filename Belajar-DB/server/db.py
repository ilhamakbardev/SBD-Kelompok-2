from dotenv import dotenv_values
import mysql.connector as connetion

config = dotenv_values(".env")

def open_db_connection():
    db_host = config["DB_HOST"]
    db_name = config["DB_NAME"]
    db_user = config["DB_USER"]
    db_password = config["DB_PW"]

    db = connetion.connect(
        host=db_host,
        database = db_name,
        user=db_user,
        password=db_password,
    )

    return db

open_db_connection()