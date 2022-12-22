// my solution

function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (!candidate.minSalary || !job.maxSalary) throw error;

  return candidate.minSalary * 0.9 <= job.maxSalary;
}


// other solutions
const match = (candidate, job) => {
  if (!job.maxSalary || !candidate.minSalary) throw TypeError("Missing salary");
  return job.maxSalary >= candidate.minSalary * 0.9;
};

//


function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw "Invalid Job or Candidate";
  return job.maxSalary >= candidate.minSalary * 0.9;
}




// test
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    let candidate1 = { minSalary: 120000 },
      job1 = { maxSalary: 130000 },
      job2 = { maxSalary: 80000 };

    Test.assertEquals(match(candidate1, job1), true);
    Test.assertEquals(match(candidate1, job2), false);
  });
});
