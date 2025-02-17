class UserEntity {
    constructor({ first_name, last_name, age, user_email }) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.user_email = user_email;
    }
}

module.exports = UserEntity;
