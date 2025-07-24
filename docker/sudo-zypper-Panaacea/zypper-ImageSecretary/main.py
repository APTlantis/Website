from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import os, shutil, hashlib, json
from datetime import datetime

app = FastAPI()

# CORS if needed
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = "/data"

os.makedirs(os.path.join(BASE_DIR, "original"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "processed"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "metadata"), exist_ok=True)


def process_image(filename: str, file_bytes: bytes):
    input_path = os.path.join(BASE_DIR, "original", filename)
    with open(input_path, "wb") as f:
        f.write(file_bytes)

    img = Image.open(input_path)
    img = img.convert("RGB")
    original_size = img.size

    # Resize to fit within 1920x1080
    img.thumbnail((1920, 1080))

    processed_path = os.path.join(BASE_DIR, "processed", filename)
    img.save(processed_path, format="PNG", optimize=True)

    with open(processed_path, "rb") as f:
        file_hash = hashlib.sha256(f.read()).hexdigest()

    metadata = {
        "filename": filename,
        "original_size": original_size,
        "processed_size": img.size,
        "sha256": file_hash,
        "processed_at": datetime.utcnow().isoformat()
    }

    metadata_path = os.path.join(BASE_DIR, "metadata", f"{os.path.splitext(filename)[0]}.json")
    with open(metadata_path, "w") as f:
        json.dump(metadata, f, indent=2)

    return {
        "original": input_path,
        "processed": processed_path,
        "metadata": metadata_path
    }


@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    contents = await file.read()
    result = process_image(file.filename, contents)
    return JSONResponse({
        "original": f"/download/original/{file.filename}",
        "processed": f"/download/processed/{file.filename}",
        "metadata": f"/download/metadata/{os.path.splitext(file.filename)[0]}.json"
    })


@app.get("/download/original/{filename}")
def download_original(filename: str):
    return FileResponse(os.path.join(BASE_DIR, "original", filename))


@app.get("/download/processed/{filename}")
def download_processed(filename: str):
    return FileResponse(os.path.join(BASE_DIR, "processed", filename))


@app.get("/download/metadata/{filename}")
def download_metadata(filename: str):
    return FileResponse(os.path.join(BASE_DIR, "metadata", f"{filename}.json"))
