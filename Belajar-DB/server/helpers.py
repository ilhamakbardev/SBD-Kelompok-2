from db import open_db_connection

def raw_data_to_json(data):
    parsed_data = []
    for value in data: 
        json = {}
        id, name, address = value
        print(id, name, address)
        json["id"] = id
        json["name"] = name
        json["address"] = address
        parsed_data.append(json)
        
    return parsed_data

def query_get_users():
    db = open_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users")
    data = cursor.fetchall()
    cursor.close()
    return data

def query_get_user_by_id(id):
    db = open_db_connection()
    cursor = db.cursor()
    cursor.execute(f"SELECT * FROM users WHERE id = {id}")
    data = cursor.fetchall()
    cursor.close()
    return data

def query_post_user(data):
    db = open_db_connection()
    name = data["name"]
    address = data["address"]
    cursor = db.cursor()
    edit_query = f'''
    INSERT INTO users (name, address)
    VALUES ('{name}', '{address}');
    '''
    cursor.execute(edit_query)
    db.commit()
    cursor.close()

def query_edit_user_by_id(id):
    db = open_db_connection()
    cursor = db.cursor()
    edit_query = f'''
    UPDATE users
    SET name = 'edited udin', address = 'edited sleman'
    WHERE id = {id}; 
    '''
    cursor.execute(edit_query)
    db.commit()
    cursor.close()

def query_patch_user_by_id(id):
    db = open_db_connection()
    cursor = db.cursor()
    edit_query = f'''
    UPDATE users
    SET name = 'edited udin patch'
    WHERE id = {id}; 
    '''
    cursor.execute(edit_query)
    db.commit()
    cursor.close()

def query_delete_user_by_id(id):
    db = open_db_connection()
    cursor = db.cursor()
    edit_query = f'''
    DELETE FROM users WHERE id = {id}; 
    '''
    cursor.execute(edit_query)
    db.commit()
    cursor.close()