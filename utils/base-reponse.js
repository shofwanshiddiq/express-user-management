class BaseResponse {
    constructor(success, messages, data = null, errors = null) {
        this.success = success;
        this.messages = messages;
        this.data = data;
        this.errors = errors;
    }

    static success(messages, data = null) {
        return new BaseResponse(true, messages, data);
    }

    static error(messages, errors = null) {
        return new BaseResponse(false, messages, null, errors);
    }
}

module.exports = BaseResponse;
