from fastapi import FastAPI, UploadFile
from ultralytics import YOLO
import tempfile, cv2

app = FastAPI()
model = YOLO("pest_model.pt")

solutions = {
    "aphid": "Spray neem oil weekly.",
    "mealybug": "Use rubbing alcohol on affected areas.",
    "whitefly": "Use sticky traps or neem oil spray.",
    "spider_mite": "Increase humidity and apply insecticidal soap."
}

@app.post("/analyze-video/")
async def analyze_video(file: UploadFile):
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    cap = cv2.VideoCapture(tmp_path)
    detected_pests = set()

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        results = model.predict(frame)
        for r in results:
            for box in r.boxes:
                cls = int(box.cls)
                pest_name = model.names[cls]
                detected_pests.add(pest_name)

    cap.release()
    response = [{"pest": pest, "solution": solutions.get(pest, "No solution found")} for pest in detected_pests]
    return {"detections": response}
