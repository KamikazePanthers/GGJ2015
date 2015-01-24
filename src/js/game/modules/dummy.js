var DummyObject = function (text) {
    this.text = text;
};

DummyObject.prototype.duplicate = function() {
    this.text = this.text + this.text;
    return true;
};

DummyObject.prototype.alert = function() {
    alert(this.text);
    return true;
};

module.exports = DummyObject;