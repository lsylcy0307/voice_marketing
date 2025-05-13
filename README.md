## **Project Overview**

Build a simple web application to showcase a professor’s research project by allowing users to interact with a machine learning model using audio input. Users will be able to record audio, submit it to a model hosted on Hugging Face (or a placeholder), and view the model’s prediction and related explanations.

## 

## **Frontend Requirements & UI Design**

The frontend will be a **clean, single-page application** designed to showcase the professor’s research interactively. It will guide the user through recording audio, submitting it to a backend model, and viewing predictions in an intuitive and engaging format.

### **Page Layout Overview**

The application will consist of **three primary sections**:

#### **1\.** 

#### **Header**

* Displays the **title of the research project**, e.g., **“Interactive Research Demo”**.

* Includes a **concise subtitle** describing the app’s purpose, e.g., *“Explore item purchase likelihood using voice input”*.

* Styled with **clear typography** and a distinct background to differentiate it visually from the rest of the page.

#### **2\. Main Content Area (Core user interaction)**

##### **a. Audio Recording Interface**

* Prominently positioned **“🎙️ Record Audio” button**.

* On click:

  * Begins audio recording for up to **10 seconds**.

  * A **visual timer** is displayed while recording.

  * A **“Stop” button** allows early termination.

  * Optionally display recording status (e.g., waveform animation or blinking mic icon).

    ##### **b.** 

    ##### **Audio Playback & Confirmation**

* Once recording is stopped:

  * Display an **audio playback widget** for review.

  * Show a **“Submit” button** to allow the user to send the audio to the backend.

  * Disable submit button until valid audio is available.

    ##### **c.** 

    ##### **Prediction Results Display**

* After backend returns a response, display:

  * **Item Purchase Likelihood Score** — a numerical prediction (e.g., “73% likely”).

  * **Confidence Score** (if provided by the model).

  * **Explanatory Features** (based on mock or model output), such as:

    * Detected tone or speech patterns

    * Important keywords or phrases

    * Model rationale (e.g., “Keyword ‘buy’ detected”)

* Present results in a **visually digestible format**, such as:

  * Cards with labels and values

  * Bullet point explanations

  * Charts or progress bars for likelihood/confidence

    #### **3\.** 

    #### **Footer**

* Brief attribution of the research and professor’s name.

* Optional links to:

  * Related research paper or lab site

  * Feedback or contact form

* Styled subtly to maintain user focus on core content.

##  **Backend Requirements**

### **1\.** 

### **Audio Handling**

* Set up an API endpoint: POST /predict

* Accept audio data in **WAV or MP3 format** via multipart/form-data.

* Save uploaded audio temporarily for processing (or keep in memory).

### **2\.** 

### **Model Placeholder Integration**

* In place of a real model, create a **mock function**:

def run\_model\_on\_audio(audio\_file):  
    return {  
        "purchase\_likelihood": 0.73,  
        "confidence": 0.85,  
        "explanations": \["Voice pitch suggests interest", "Keyword 'buy' detected"\]  
    }

* Clearly comment the placeholder function to indicate where to integrate the Hugging Face API later.

* Structure backend so you can **swap in a Hugging Face inference API call** in one place (e.g., in the above function).

### **3\.** 

### **Future Model Integration (Design Now)**

* Use requests or httpx to structure a call to Hugging Face Inference API like:

response \= requests.post(  
    "https://api-inference.huggingface.co/models/your-model-id",  
    headers={"Authorization": f"Bearer {HF\_API\_TOKEN}"},  
    data=audio\_bytes  
)

### **4\.** 

### **Response Format**

* Return a JSON response to the frontend:

{  
  "purchase\_likelihood": 0.73,  
  "confidence": 0.85,  
  "explanations": \["Voice pitch suggests interest", "Keyword 'buy' detected"\]  
}

## **Frontend-Backend Interaction Flow**

1. User records audio in browser.

2. Audio is previewed and submitted to backend via POST /predict.

3. Backend runs mock model (or real model in future) on audio.

4. Backend sends JSON response to frontend.

5. Frontend displays prediction and explanations.


Backend deployment url: voice-marketing-backend-k4990o1m4-lsylcy0307s-projects.vercel.app