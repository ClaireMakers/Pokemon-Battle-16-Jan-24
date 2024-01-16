class Pokemon { 
    constructor(name, healthPoints, attackPoints) { 
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
    }

    getName() { 
        return this.name;
    }

    getHealthPoints() { 
        return this.healthPoints;
    }

    getAttackPoints() { 
        return this.attackPoints;
    }
}

module.exports = Pokemon;