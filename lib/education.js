/**
 *
 * @namespace faker.education
 */
var Education = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * education
   *
   * @method faker.education.education
   */
  self.education = function () {
    return fake('{{education.anystreams}} {{education.institution}}');
  };

  self.education.schema = {
    "description": "Generates a random education stream.",
    "sampleResults": ["Mechanical Engineering", "Genetic Engineering"]
  };

  /**
   * Mtech
   *
   * @method faker.education.mtech
   */
  self.mtech = function () {
    return faker.random.arrayElement(faker.definitions.education.mtech);
  };

  self.mtech.schema = {
    "description": "Generates a mtech stream.",
    "sampleResults": ["Chemical Engineering", "VLSI System Design", "Mechanical Engineering"]
  };


  /**
   * mba
   *
   * @method faker.education.mba
   */
  self.mba = function () {
    return faker.random.arrayElement(faker.definitions.education.mba);
  };

  self.mba.schema = {
    "description": "Generates a mba stream.",
    "sampleResults": ["Team Management", "Sports Management", "Brand Management"]
  };

  /**
   * bba
   *
   * @method faker.education.bba
   */
  self.bba = function () {
    return faker.random.arrayElement(faker.definitions.education.bba);
  };

  self.bba.schema = {
    "description": "Generates a bba stream.",
    "sampleResults": ["BBA In Retail", "BBA In Banking"]
  };

  /**
   * btech
   *
   * @method faker.education.btech
   */
  self.btech = function () {
    return faker.random.arrayElement(faker.definitions.education.btech);
  };

  self.btech.schema = {
    "description": "Generates a btech stream.",
    "sampleResults": ["Civil Engineering", "Computer Science Engineering", "Power Engineering"]
  };

  /**
   * institution
   *
   * @method faker.education.institution
   */
  self.institution = function () {
    return faker.random.arrayElement(faker.definitions.education.institution);
  };

  self.institution.schema = {
    "description": "Generates a institution.",
    "sampleResults": ["National Institute of Engineering", "Madras Institute of Technology", "Bangalore Institute of Technology"]
  };

  /**
   * anystreams
   *
   * @method faker.education.anystreams
   */
  self.anystreams = function () {
    return faker.random.arrayElement(faker.definitions.education.anystreams);
  };

  self.anystreams.schema = {
    "description": "Generates anystream.",
    "sampleResults": ["National Institute of Engineering", "Madras Institute of Technology", "Bangalore Institute of Technology"]
  };
 
}
module["exports"] = Education;