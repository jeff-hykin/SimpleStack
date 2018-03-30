class Users(THE_DATABASE.Model):
    # this uses SqlAlchemy to create User classes when pulling data from the database
    __tablename__ = 'Users'
    username = THE_DATABASE.Column(THE_DATABASE.String(128),primary_key = True)
    password = THE_DATABASE.Column(THE_DATABASE.String(64))

    def __init__(self,input_username,input_password):
        # FIXME, check if username is already in database
        self.password = input_password
        self.username = input_username
        THE_DATABASE.session.add(self)
        THE_DATABASE.session.commit()
    
    @classmethod
    def add(this_class,input_username,input_password):
        # FIXME, check if username is already in database
        return Users(input_username,input_password)

    @classmethod
    def withUsername(this_class,input_username):
        result = this_class.query.filter_by(username=input_username).first()
        if result == None:
            return None
        else:
            return result.asJson()

    def delete(self):
        THE_DATABASE.session.delete(self)
        THE_DATABASE.session.commit()
    
    def asJson(self):
        return  {
                    "username" : self.username, 
                    "password" : self.password,
                }

