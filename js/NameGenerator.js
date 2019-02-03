class NameGenerator{
	static generate(gender){
		const validNames = genders.names[gender];
		return validNames[Math.floor(Math.random() * validNames.length)];
	}
}