class FamilyTree{
	constructor(_count){
		this.count = _count;
		this.family = [];
	}

	RandomValues(){
		console.log(this.count);
		this.family.push(new FamilyMember(NameGenerator.generate(genders.Male)));
		console.log(this.family);
	}
}