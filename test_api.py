from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Ajout de cette méthode pour générer l'erreur d'accessibilité 'access-control-allow-origin'
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/contact/{contact_id}")
def contact_details(contact_id: int):
    return {"contact_id": contact_id}

@app.get("/age/{future_age}")
def future_age(future_age: int):
    return {"future_age" : future_age + 10}

# from fastapi import  FastAPI
# from fastapi.staticfiles import StaticFiles

# # Use this to serve a public/index.html
# from starlette.responses import FileResponse 

# app = FastAPI()
# app.mount("./", StaticFiles(directory="public"), name="public")

# @app.get("/")
# async def read_index():
#     return FileResponse('./index_final.html')

# Test 3

