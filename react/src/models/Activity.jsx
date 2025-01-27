

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

    get

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
