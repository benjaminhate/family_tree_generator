class FamilyTreeGenerator{
	constructor(_count){
		this.count = _count;
	}

	generate(){
		this.tree = new FamilyTree(this.count);
		this.tree.RandomValues();
	}
}