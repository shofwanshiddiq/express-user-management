class User {
    constructor(data :{}) {
        // menggunakan object data untuk membuat properti secara dinamis
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.age = data.age;
        this.user_email = data.user_email;
    }
}