from flask import Flask, request, render_template, jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validate():
    data = request.get_json()
    identifiant = data.get('identifiant')
    motdepasse = data.get('motdepasse')
    email = data.get('email')

    if not identifiant or not motdepasse or '@' not in email:
        return jsonify({"success": False, "message": "Erreur : veuillez remplir correctement tous les champs."})
    return jsonify({"success": True, "message": "Connexion réussie."})

if __name__ == '__main__':
    app.run(debug=True)
