import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

app = FastAPI()

class Login(BaseModel):
    email: str
    password: str

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/login/",status_code=200)
async def login(login: Login):
    if login.email == "sr.tiagomarques@gmail.com" and login.password == "Senha":
        return {"message": "Olá, login efetuado com email {}".format(login.email)}
        response.status_code = 200
    else:
        return JSONResponse(status_code=400, content={"message": "Login ou senha incorreto"})

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)