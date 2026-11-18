from flask import Flask, render_template, session, request, redirect, url_for

app = Flask(__name__)
app.secret_key = "art-project-crisis-state-key"


@app.route("/")
def index():
    if request.args.get("reset") == "1":
        session["reloads"] = 0
        return redirect(url_for("index"))
    reloads = session.get("reloads", 0) + 1
    if reloads > 12:
        reloads = 12
    session["reloads"] = reloads
    return render_template("index.html", stage=reloads)


if __name__ == "__main__":
    app.run(debug=True)
