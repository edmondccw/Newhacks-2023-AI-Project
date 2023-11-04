from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from .config import Config

db = SQLAlchemy()

def create_app():

    # App config
    app = Flask(__name__)
    app.config.from_object(Config)

    # Import Blueprints
    # from .routes.apis import apis
    from .routes.auth import auth

    # app.register_blueprint(apis, url_prefix="/api")
    app.register_blueprint(auth, url_prefix="/")

    # Import db models
    from .models.users import User
    
    # Init Database
    db.init_app(app)

    with app.app_context():
        db.create_all()

    # Login Manager
    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = "auth.login"

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))


    return app