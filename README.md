#Interactive net-art project
**LIVE DEMO: https://crisis-net-art.onrender.com/
An interactive web art project built with **Python (Flask)**, **HTML/CSS**, and **Vanilla JavaScript**. Designed to simulate the experience of a person going through an emotional crisis through a sequence of browser reload states (`1` to `12`), transitioning from technical glitch to grounding exercises and real crisis helpline resources.

##Tech stack
- **Backend:** Python 3, Flask 
- **Frontend:** HTML5 (Jinja2), CSS3 (Keyframes & transitions), Vanilla JavaScript
- **Deployment:** Gunicorn / Render

##Run locally
```bash
git clone https://github.com/nt68vfwdby-bit/crisis_net_art
cd crisis-net-art
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
   ```
Open http://127.0.0.1:5000 in your browser (append `/?reset=1` to restart the sequence).

