# How to create project
```
Create virtual env for python
python3 -m venv <your_venv>
ex: python3 -m venv env-backend

Use virtual env python
source <your_venv>/bin/activate
ex: source env-backend/bin/activate

Install packages
pip install -r requirements.txt
```

# How to run Project
```
python app.py
notes: run in virtual env
```

# How to push the project to github
```
create new branch (add, commit, and push your codes there)
ex:
git checkout -b giffari_db
git add test.txt
git commit -m "add json file"
git push origin giffari_db

create .gitignore, add:
env-backend
```