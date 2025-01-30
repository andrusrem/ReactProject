

export class Activity{
    constructor(id, titleENG, titleEST, titleRUS, titleFIN, bodyENG, bodyEST, bodyRUS, bodyFIN){
        this.id = id;
        this.titleENG = titleENG;
        this.titleEST = titleEST;
        this.titleRUS = titleRUS;
        this.titleFIN = titleFIN;
        this.bodyENG = bodyENG;
        this.bodyEST = bodyEST;
        this.bodyRUS = bodyRUS;
        this.bodyFIN = bodyFIN;
    }

    get titleENG() {
        return this._titleENG;
    }

    get titleEST() {
        return this._titleEST;
    }

    get titleRUS() {
        return this._titleRUS;
    }

    get titleFIN() {
        return this._titleFIN;
    }

    get bodyENG() {
        return this._bodyENG;
    }

    get bodyEST() {
        return this._bodyEST;
    }

    get bodyRUS() {
        return this._bodyRUS;
    }

    get bodyFIN() {
        return this._bodyFIN;
    }

    set titleENG(value) { 
        if (value.length < 50) {
            alert("Name is too short.");
            return;
        }
        this._titleENG = value;     
    }

    set titleEST(value) { 
        if (value.length < 50) {
            alert("Name is too short.");
            return;
        }
        this._titleEST = value;     
    }

    set titleRUS(value) { 
        if (value.length < 50) {
            alert("Name is too short.");
            return;
        }
        this._titleRUS = value;     
    }

    set titleFIN(value) { 
        if (value.length < 50) {
            alert("Name is too short.");
            return;
        }
        this._titleFIN = value;     
    }

    set bodyENG(value) { 
        if (value.length < 248) {
            alert("Name is too short.");
            return;
        }
        this._bodyENG = value;     
    }

    set bodyEST(value) { 
        if (value.length < 248) {
            alert("Name is too short.");
            return;
        }
        this._bodyEST = value;     
    }

    set bodyRUS(value) { 
        if (value.length < 248) {
            alert("Name is too short.");
            return;
        }
        this._bodyRUS = value;     
    }

    set bodyFIN(value) { 
        if (value.length < 248) {
            alert("Name is too short.");
            return;
        }
        this._bodyFIN = value;     
    }

    //Body for Create method
    getCreateJsonBody()
    {
        return {
            'TitleENG': this.titleENG, 
            'TitleEST': this.titleEST,
            'TitleRUS': this.titleRUS,
            'TitleFIN': this.titleFIN,
            'BodyENG': this.bodyENG,
            'BodyEST': this.bodyEST,
            'BodyRUS': this.bodyRUS,
            'BodyFIN': this.bodyFIN,
        }
    }
    create(url)
    {

    }
}
