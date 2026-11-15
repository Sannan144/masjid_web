from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/masjid_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- 1. Model (Table ki Class) ---
class Trial(db.Model):
    __tablename__ = 'trials'
    id = db.Column(db.Integer, primary_key=True)
    student_name = db.Column(db.String(100))
    age = db.Column(db.Integer)                  # Nayi field
    gender = db.Column(db.String(20))              # Nayi field
    parent_name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    phone = db.Column(db.String(50))
    course = db.Column(db.String(100))
    preferred_tutor = db.Column(db.String(50))     # Nayi field
    time_zone = db.Column(db.String(100))          # Nayi field

# Server start hone se pehle table create karne ke liye
with app.app_context():
    db.create_all()

# --- 2. Route ---
@app.route('/api/submit-trial', methods=['POST'])
def submit_trial():
    try:
        data = request.json
        
        new_trial = Trial(
            student_name=data.get('studentName'),
            age=data.get('age'),
            gender=data.get('gender'),
            parent_name=data.get('parentName'),
            email=data.get('email'),
            phone=data.get('phone'),
            course=data.get('course'),
            preferred_tutor=data.get('preferredTutor'),
            time_zone=data.get('timeZone')
        )

        db.session.add(new_trial)
        db.session.commit()

        return jsonify({"success": True, "message": "Trial booked successfully!"}), 201

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/trials', methods=['GET'])
def get_trials():
    try:
        all_trials = Trial.query.all()
        trials_list = []
        for t in all_trials:
            trials_list.append({
                "id": t.id,
                "student_name": t.student_name,
                "age": t.age,
                "gender": t.gender,
                "parent_name": t.parent_name,
                "email": t.email,
                "phone": t.phone,
                "course": t.course,
                "preferred_tutor": t.preferred_tutor,
                "time_zone": t.time_zone
            })
        return jsonify(trials_list), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)